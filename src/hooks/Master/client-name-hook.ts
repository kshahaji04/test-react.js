import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getClientGroupList, get_client_group } from '../../store/slices/Chitti/get-client-group-list-slice';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { getClientName, get_client_name } from '../../store/slices/Chitti/get-client-name-slice';

const UseClientNameHook = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  const ClientNameDataFromStore:any = useSelector(get_client_name);
  const [clientNameList, setClientNameList] = useState<any>([]);

  useEffect(() => {
    dispatch(getClientName(AccessToken?.token));
  }, []);

  useEffect(() => {
    if (
        ClientNameDataFromStore?.data?.length > 0 &&
        ClientNameDataFromStore?.data !== null
    ) {
        setClientNameList([...ClientNameDataFromStore?.data]);
    } else {
        setClientNameList([]);
    }
  }, [ClientNameDataFromStore]);
  return{clientNameList};
};

export default UseClientNameHook;
