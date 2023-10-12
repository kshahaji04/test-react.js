import react, { useState, useEffect } from 'react';
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

const UseDataUploadHook = () => {
  const dispatch = useDispatch();

  const AccessToken: any = useSelector(get_access_token);
  const SupplierDataFromStore: any = useSelector(get_supplier_list);
  const EmeraldSupplierDataFromStore: any = useSelector(get_emerald_supplier);

  const [supplierList, setSupplierList] = useState<any>([]);
  const [emeraldSupplierData, setEmeraldSupplierData] = useState<any>([]);
  const [supplier, setSupplier] = useState<any>('');

  console.log('EmeraldSupplierDataFromStore', EmeraldSupplierDataFromStore);

  console.log('SupplierDataFromStore', SupplierDataFromStore);
  useEffect(() => {
    dispatch(getSupplierList(AccessToken?.token));
    dispatch(getEmeraldSupplier(AccessToken?.token));
  }, []);

  useEffect(() => {
    if (
      SupplierDataFromStore?.data?.length > 0 &&
      SupplierDataFromStore?.data !== null
    ) {
      setSupplierList([...SupplierDataFromStore?.data]);
    } else {
      setSupplierList([]);
    }
  }, [SupplierDataFromStore]);

  useEffect(() => {
    if (
      EmeraldSupplierDataFromStore?.data?.data?.length > 0 &&
      EmeraldSupplierDataFromStore?.data?.data !== null
    ) {
      setEmeraldSupplierData([...EmeraldSupplierDataFromStore?.data?.data]);
    } else {
      setEmeraldSupplierData([]);
    }
  }, [EmeraldSupplierDataFromStore]);

  const HandleSupplier = (e: any) => {
    setSupplier(e.target.value);
  };

  console.log('emeraldSupplierData in hook', emeraldSupplierData);

  return { supplierList, HandleSupplier, emeraldSupplierData };
};

export default UseDataUploadHook;
