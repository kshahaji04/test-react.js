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

const useClientGroupHook = () => {
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);

  const clientGroupDataFromStore: any = useSelector(get_client_group);
  const clientNameclientGroupDataFromStore: any = useSelector(
    get_client_name_client_group
  );
  const [clientGroupList, setClientGroupList] = useState<any>([]);
  const [clientNameClientGroupList, setClientNameClientGroupList] =
    useState<any>([]);

  useEffect(() => {
    dispatch(getClientGroupList(accessToken?.token));
    dispatch(getClientNameClientGroup(accessToken?.token));
  }, []);

  useEffect(() => {
    if (
      clientGroupDataFromStore?.data?.length > 0 &&
      clientGroupDataFromStore?.data !== null
    ) {
      setClientGroupList([...clientGroupDataFromStore?.data]);
    } else {
      setClientGroupList([]);
    }
  }, [clientGroupDataFromStore]);

  useEffect(() => {
    if (
      clientNameclientGroupDataFromStore?.data?.length > 0 &&
      clientNameclientGroupDataFromStore?.data !== null
    ) {
      setClientNameClientGroupList([
        ...clientNameclientGroupDataFromStore?.data,
      ]);
    } else {
      setClientNameClientGroupList([]);
    }
  }, [clientNameclientGroupDataFromStore]);

  return { clientGroupList, clientNameClientGroupList };
};

export default useClientGroupHook;
