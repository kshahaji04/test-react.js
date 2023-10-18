import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';

import {
  getEmeraldSupplierDetails,
  get_emerald_supplier_details,
} from '../../store/slices/dataUpload/get-emerald-supplier-details-slice';

const UseEmeraldSupplierDetailHook: any = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);
  const EmeraldSupplierDetailsFromStore: any = useSelector(
    get_emerald_supplier_details
  );

  const [emeraldSupplierDetail, setEmeraldSupplierDetail] = useState<any>('');
  const { id } = useParams();

  console.log(
    'EmeraldSupplierDetailsFromStore',
    EmeraldSupplierDetailsFromStore
  );

  useEffect(() => {
    const params: any = {
      token: AccessToken?.token,
      id: id,
    };
    dispatch(getEmeraldSupplierDetails(params));
  }, []);

  useEffect(() => {
    if (
      Object.keys(EmeraldSupplierDetailsFromStore?.data)?.length > 0 &&
      EmeraldSupplierDetailsFromStore?.data !== null
    ) {
      setEmeraldSupplierDetail([...EmeraldSupplierDetailsFromStore?.data]);
    } else {
      setEmeraldSupplierDetail([]);
    }
  }, [EmeraldSupplierDetailsFromStore]);

  console.log('emerald detail data', emeraldSupplierDetail);
  return { emeraldSupplierDetail };
};

export default UseEmeraldSupplierDetailHook;
