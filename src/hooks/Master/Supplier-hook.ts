import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  get_supplier_name_supplier_group,
  getsupplierAndSupplierGroup,
} from '../../store/slices/Master/get-supplier-supplierGroup-slice';
import {
  getSupplierGroupList,
  get_supplier_group_data,
} from '../../store/slices/Master/get-supplier-group-slice';

const useSupplierHook = () => {
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);

  const getSupplierGroupDataFromStore: any = useSelector(
    get_supplier_group_data
  );

  const supplierAndSupplierGroupDataFromStore: any = useSelector(
    get_supplier_name_supplier_group
  );

  const [supplierNameSupplierGroupList, setSupplierNameSupplierGroupList] =
    useState<any>([]);
  const [supplierGroupList, setSupplierGroupList] = useState<any>([]);

  useEffect(() => {
    dispatch(getsupplierAndSupplierGroup(accessToken?.token));
    dispatch(getSupplierGroupList(accessToken?.token));
  }, []);

  useEffect(() => {
    if (
      supplierAndSupplierGroupDataFromStore?.data?.length > 0 &&
      supplierAndSupplierGroupDataFromStore?.data !== null
    ) {
      setSupplierNameSupplierGroupList([
        ...supplierAndSupplierGroupDataFromStore?.data,
      ]);
    } else {
      setSupplierNameSupplierGroupList([]);
    }
  }, [supplierAndSupplierGroupDataFromStore]);

  useEffect(() => {
    if (
      getSupplierGroupDataFromStore?.data?.length > 0 &&
      getSupplierGroupDataFromStore?.data !== null
    ) {
      setSupplierGroupList([...getSupplierGroupDataFromStore?.data]);
    } else {
      setSupplierGroupList([]);
    }
  }, [getSupplierGroupDataFromStore]);

  return { supplierNameSupplierGroupList, supplierGroupList };
};

export default useSupplierHook;
