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
  const accessToken: any = useSelector(get_access_token);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      let apiRes: any = await AddClientGroupApi(accessToken?.token, title);
      if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
        toast.success('Client Group Created');
        dispatch(getClientGroupList(accessToken?.token));
      } else {
        toast.error('Client group already exist');
      }
      setError('');
      setInputValue('');
    }
  };

  const handleInputValue = (e: any) => {
    setError('');
    setTitle(e.target.value);
    setInputValue(e.target.value);
  };
  return (
    <>
      <SingleItemAdd
        inputValue={inputValue}
        handleInputValue={handleInputValue}
        error={error}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default AddClientGroup;
