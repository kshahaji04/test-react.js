import react, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getSupplierList,
  get_supplier_list,
} from '../../store/slices/dataUpload/get-supplier-slice';
import {
  getEmeraldTableData,
  get_Emerald_detail,
} from '../../store/slices/dataUpload/get-emerald-table-data-slice';

const UseDataUploadHook = () => {
  const dispatch = useDispatch();

  const AccessToken: any = useSelector(get_access_token);
  const SupplierDataFromStore: any = useSelector(get_supplier_list);

  const [supplierList, setSupplierList] = useState<any>([]);
  const [supplier, setSupplier] = useState<any>('');

  console.log('SupplierDataFromStore', SupplierDataFromStore);
  useEffect(() => {
    dispatch(getSupplierList(AccessToken?.token));
    dispatch(getEmeraldTableData(AccessToken?.token));
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
  }, []);

  const HandleSupplier = (e: any) => {
    setSupplier(e.target.value);
  };

  return { supplierList, HandleSupplier };
};

export default UseDataUploadHook;
