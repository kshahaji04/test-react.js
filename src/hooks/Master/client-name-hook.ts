import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getClientName,
  get_client_name,
} from '../../store/slices/Chitti/get-client-name-slice';

const useClientNameHook = () => {
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);

  const clientNameDataFromStore: any = useSelector(get_client_name);
  const [clientNameList, setClientNameList] = useState<any>([]);

  useEffect(() => {
    dispatch(getClientName(accessToken?.token));
  }, []);

  useEffect(() => {
    if (
      clientNameDataFromStore?.data?.length > 0 &&
      clientNameDataFromStore?.data !== null
    ) {
      setClientNameList([...clientNameDataFromStore?.data]);
    } else {
      setClientNameList([]);
    }
  }, [clientNameDataFromStore]);
  return { clientNameList };
};

export default useClientNameHook;
