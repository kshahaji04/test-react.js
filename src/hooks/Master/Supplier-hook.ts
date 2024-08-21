import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  get_supplier_name_supplier_group,
  getsupplierAndSupplierGroup,
} from '../../store/slices/Master/get-supplier-supplierGroup-slice';
import {
  getSupplierGroupList,
  get_supplier_group_data,
} from '../../store/slices/Master/get-supplier-group-slice';
import useHandleStateUpdateHook from '../handle-state-update-hook';

const useSupplierHook = () => {
  const dispatch = useDispatch();
  const { isLoading, setIsLoading } = useHandleStateUpdateHook();
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
    setIsLoading(true);
    dispatch(getsupplierAndSupplierGroup(accessToken?.token));
    dispatch(getSupplierGroupList(accessToken?.token));
  }, [dispatch, accessToken?.token]);

  useEffect(() => {
    if (supplierAndSupplierGroupDataFromStore?.data) {
      setSupplierNameSupplierGroupList([
        ...supplierAndSupplierGroupDataFromStore?.data,
      ]);
      setIsLoading(false); // Data is fetched, stop loading
    } else if (
      supplierAndSupplierGroupDataFromStore?.data === null ||
      supplierAndSupplierGroupDataFromStore?.data?.length === 0
    ) {
      setSupplierNameSupplierGroupList([]);
      setIsLoading(false); // No data, stop loading
    }
  }, [supplierAndSupplierGroupDataFromStore]);

  useEffect(() => {
    if (getSupplierGroupDataFromStore?.data) {
      setSupplierGroupList([...getSupplierGroupDataFromStore?.data]);
      setIsLoading(false); // Data is fetched, stop loading
    } else if (
      getSupplierGroupDataFromStore?.data === null ||
      getSupplierGroupDataFromStore?.data?.length === 0
    ) {
      setSupplierGroupList([]);
      setIsLoading(false); // No data, stop loading
    }
  }, [getSupplierGroupDataFromStore]);

  console.log("sett", isLoading)

  return { supplierNameSupplierGroupList, supplierGroupList, isLoading };
};

export default useSupplierHook;
