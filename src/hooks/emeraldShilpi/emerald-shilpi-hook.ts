import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  getEmeraldShilpiList,
  get_Emerald_shilpi_list,
} from '../../store/slices/emerald-shilpi/get-emerald-shilpi-slice';
import { get_access_token } from '../../store/slices/auth/token-login-slice';

const useEmeraldShilpiHook: any = () => {
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);

  const [emeraldShilpiListData, setemeraldShilpiListData] = useState<any>([]);

  const emeraldShilpiDataFromStore: any = useSelector(get_Emerald_shilpi_list);

  useEffect(() => {
    dispatch(getEmeraldShilpiList(accessToken?.token));
  }, []);

  useEffect(() => {
    if (
      emeraldShilpiDataFromStore?.data?.length > 0 &&
      emeraldShilpiDataFromStore?.data !== null
    ) {
      setemeraldShilpiListData([...emeraldShilpiDataFromStore?.data]);
    } else {
      setemeraldShilpiListData([]);
    }
  }, [emeraldShilpiDataFromStore]);
  return {
    emeraldShilpiListData,
  };
};

export default useEmeraldShilpiHook;
