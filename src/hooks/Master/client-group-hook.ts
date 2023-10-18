import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getClientGroupList,
  get_client_group,
} from '../../store/slices/Chitti/get-client-group-list-slice';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import {
  getClientNameClientGroup,
  get_client_name_client_group,
} from '../../store/slices/Master/get-clientname-clientgroup-slice';

const UseClientGroupHook = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  const ClientGroupDataFromStore: any = useSelector(get_client_group);
  const ClientNameClientGroupDataFromStore: any = useSelector(
    get_client_name_client_group
  );
  const [clientGroupList, setClientGroupList] = useState<any>([]);
  const [clientNameClientGroupList, setClientNameClientGroupList] =
    useState<any>([]);
  console.log(
    'ClientNameClientGroupDataFromStore',
    ClientNameClientGroupDataFromStore
  );
  useEffect(() => {
    dispatch(getClientGroupList(AccessToken?.token));
    dispatch(getClientNameClientGroup(AccessToken?.token));
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

  useEffect(() => {
    if (
      ClientNameClientGroupDataFromStore?.data?.length > 0 &&
      ClientNameClientGroupDataFromStore?.data !== null
    ) {
      setClientNameClientGroupList([
        ...ClientNameClientGroupDataFromStore?.data,
      ]);
    } else {
      setClientNameClientGroupList([]);
    }
  }, [ClientNameClientGroupDataFromStore]);

  return { clientGroupList, clientNameClientGroupList };
};

export default UseClientGroupHook;
