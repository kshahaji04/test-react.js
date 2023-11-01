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

const UseSupplierHook = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  const GetSupplierGroupDataFromStore: any = useSelector(
    get_supplier_group_data
  );

  const SupplierAndSupplierGroupDataFromStore: any = useSelector(
    get_supplier_name_supplier_group
  );

  const [supplierNameSupplierGroupList, setSupplierNameSupplierGroupList] =
    useState<any>([]);
  const [supplierGroupList, setSupplierGroupList] = useState<any>([]);
  console.log('GetSupplierGroupDataFromStore', GetSupplierGroupDataFromStore);
  useEffect(() => {
    dispatch(getsupplierAndSupplierGroup(AccessToken?.token));
    dispatch(getSupplierGroupList(AccessToken?.token));
  }, []);

  useEffect(() => {
    if (
      SupplierAndSupplierGroupDataFromStore?.data?.length > 0 &&
      SupplierAndSupplierGroupDataFromStore?.data !== null
    ) {
      setSupplierNameSupplierGroupList([
        ...SupplierAndSupplierGroupDataFromStore?.data,
      ]);
    } else {
      setSupplierNameSupplierGroupList([]);
    }
  }, [SupplierAndSupplierGroupDataFromStore]);

  useEffect(() => {
    if (
      GetSupplierGroupDataFromStore?.data?.length > 0 &&
      GetSupplierGroupDataFromStore?.data !== null
    ) {
      setSupplierGroupList([...GetSupplierGroupDataFromStore?.data]);
    } else {
      setSupplierGroupList([]);
    }
  }, [GetSupplierGroupDataFromStore]);

  return { supplierNameSupplierGroupList, supplierGroupList };
};

export default UseSupplierHook;
