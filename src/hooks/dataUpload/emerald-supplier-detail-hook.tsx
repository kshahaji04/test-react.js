import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';

import {
  getEmeraldSupplierDetails,
  get_emerald_supplier_details,
} from '../../store/slices/dataUpload/get-emerald-supplier-details-slice';

const useEmeraldSupplierDetailHook: any = () => {
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);
  const emeraldSupplierDetailsFromStore: any = useSelector(
    get_emerald_supplier_details
  );

  const [emeraldSupplierDetail, setEmeraldSupplierDetail] = useState<any>('');
  const { id } = useParams();

  useEffect(() => {
    const params: any = {
      token: accessToken?.token,
      id: id,
    };
    dispatch(getEmeraldSupplierDetails(params));
  }, []);

  useEffect(() => {
    if (
      Object.keys(emeraldSupplierDetailsFromStore?.data)?.length > 0 &&
      emeraldSupplierDetailsFromStore?.data !== null
    ) {
      setEmeraldSupplierDetail([...emeraldSupplierDetailsFromStore?.data]);
    } else {
      setEmeraldSupplierDetail([]);
    }
  }, [emeraldSupplierDetailsFromStore]);

  return { emeraldSupplierDetail };
};

export default useEmeraldSupplierDetailHook;
