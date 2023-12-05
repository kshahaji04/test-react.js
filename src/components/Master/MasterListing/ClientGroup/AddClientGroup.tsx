import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import AddClientGroupApi from '../../../../services/api/Master/add-client-group-api';
import { toast } from 'react-toastify';
import { getClientGroupList } from '../../../../store/slices/Chitti/get-client-group-list-slice';
import SingleItemAdd from '../SingleItemAdd';

const AddClientGroup = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<any>('');
  const AccessToken: any = useSelector(get_access_token);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const HandleSubmit = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      let apiRes: any = await AddClientGroupApi(AccessToken?.token, title);
      console.log('apires', apiRes);
      if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
        toast.success('Client Group Created');
        dispatch(getClientGroupList(AccessToken?.token));
      } else {
        toast.error('Client group already exist');
      }
      setError('');
      setInputValue('');
    }
  };

  // const HandleKeyDownFun: any = (e: any) => {
  //   console.log('eee', e);
  //   if (e.key === 'Enter') {
  //     HandleSubmit();
  //   }
  // };

  const HandleInputValue = (e: any) => {
    setError('');
    setTitle(e.target.value);
    setInputValue(e.target.value);
  };
  return (
    <>
      <SingleItemAdd
        inputValue={inputValue}
        HandleInputValue={HandleInputValue}
        error={error}
        HandleSubmit={HandleSubmit}
      />
    </>
  );
};

export default AddClientGroup;
