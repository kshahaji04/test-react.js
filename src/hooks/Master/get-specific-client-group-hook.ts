import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getSpecificClientGroup,
  get_specific_client_group,
} from '../../store/slices/Master/get-specific-client-group-slice';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';

const UseGetSpecificClientGroup = () => {
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);
  const { id } = useParams();
  const clientGroupDataFromStore: any = useSelector(get_specific_client_group);
  console.log('clientGroupDataFromStore', clientGroupDataFromStore);

  const [clientGroup, setClientGroup] = useState<any>('');
  useEffect(() => {
    const params = {
      name: id,
      token: AccessToken?.token,
    };
    dispatch(getSpecificClientGroup(params));
  }, []);

  useEffect(() => {
    if (
      clientGroupDataFromStore?.length > 0 &&
      clientGroupDataFromStore !== null
    ) {
      setClientGroup([...clientGroupDataFromStore?.data[0]?.client_group]);
    }
  });

  return { clientGroup };
};

export default UseGetSpecificClientGroup;