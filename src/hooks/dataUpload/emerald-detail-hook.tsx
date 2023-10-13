import react, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getEmeraldTableData,
  get_Emerald_detail,
} from '../../store/slices/dataUpload/get-emerald-table-data-slice';
import { getEmeraldShilpiDetails } from '../../store/slices/emerald-shilpi/get-emerald-shilpi-details-slice';

const UseEmeraldDetailHook: any = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);
  const EmeraldTableDataFromStore: any = useSelector(get_Emerald_detail);

  const [emeraldDetail, setEmeraldDetail] = useState<any>('');
  const { id } = useParams();

  console.log('EmeraldTableDataFromStore', EmeraldTableDataFromStore);

  useEffect(() => {
    const params: any = {
      token: AccessToken?.token,
      id: id,
    };
    dispatch(getEmeraldShilpiDetails(params));
  }, []);

  useEffect(() => {
    if (
      Object.keys(EmeraldTableDataFromStore?.data)?.length > 0 &&
      EmeraldTableDataFromStore?.data !== null
    ) {
      setEmeraldDetail([...EmeraldTableDataFromStore?.data]);
    } else {
      setEmeraldDetail([]);
    }
  }, [EmeraldTableDataFromStore]);

  console.log('emerald detail data', emeraldDetail);
  return { emeraldDetail };
};

export default UseEmeraldDetailHook;
