import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getClientGroupList, get_client_group } from '../../store/slices/Chitti/get-client-group-list-slice';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';

const UseClientGroupHook = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  const ClientGroupDataFromStore: any = useSelector(get_client_group);
  const [clientGroupList, setClientGroupList] = useState<any>([]);

  useEffect(() => {
    dispatch(getClientGroupList(AccessToken?.token));
  }, []);

  useEffect(() => {
    if (
      ClientGroupDataFromStore?.data?.length > 0 &&
      ClientGroupDataFromStore?.data !== null
    ) {
      setClientGroupList([...ClientGroupDataFromStore?.data]);
    } else {
      setClientGroupList([]);
    }
  }, [ClientGroupDataFromStore]);
  return { clientGroupList };
};

export default UseClientGroupHook;
