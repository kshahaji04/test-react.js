import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getSupplierList,
  get_supplier_list,
} from '../../store/slices/dataUpload/get-supplier-slice';
import {
  getEmeraldSupplier,
  get_emerald_supplier,
} from '../../store/slices/dataUpload/get-emerald-supplier-slice';

const useDataUploadHook = () => {
  const dispatch = useDispatch();

  const accessToken: any = useSelector(get_access_token);
  const supplierDataFromStore: any = useSelector(get_supplier_list);
  const emeraldsupplierDataFromStore: any = useSelector(get_emerald_supplier);

  const [supplierList, setSupplierList] = useState<any>([]);
  const [emeraldSupplierData, setEmeraldSupplierData] = useState<any>([]);

  const [updatedSupplierList, setUpdatedSupplierList] = useState<any>([]);

  useEffect(() => {
    dispatch(getSupplierList(accessToken?.token));
    dispatch(getEmeraldSupplier(accessToken?.token));
  }, []);

  useEffect(() => {
    if (
      supplierDataFromStore?.data?.length > 0 &&
      supplierDataFromStore?.data !== null
    ) {
      setSupplierList([...supplierDataFromStore?.data]);
    } else {
      setSupplierList([]);
    }
  }, [supplierDataFromStore]);

  useEffect(() => {
    if (
      emeraldsupplierDataFromStore?.data?.data?.length > 0 &&
      emeraldsupplierDataFromStore?.data?.data !== null
    ) {
      setEmeraldSupplierData([...emeraldsupplierDataFromStore?.data?.data]);
    } else {
      setEmeraldSupplierData([]);
    }
  }, [emeraldsupplierDataFromStore]);

  useEffect(() => {
    if (
      supplierDataFromStore?.data?.length > 0 &&
      supplierDataFromStore?.data !== null
    ) {
      const updatedSupplierList: any = supplierDataFromStore?.data.map(
        (list: any) => {
          return list.name;
        }
      );
      setUpdatedSupplierList(updatedSupplierList);
    }
  }, [supplierDataFromStore]);

  return {
    supplierList,
    emeraldSupplierData,
    updatedSupplierList,
  };
};

export default useDataUploadHook;
