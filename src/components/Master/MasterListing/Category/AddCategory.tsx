import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import { toast } from 'react-toastify';
import AddCategoryApi from '../../../../services/api/Master/add-category-api';
import { getCategoryList } from '../../../../store/slices/Master/get-category-slice';
import SingleItemAdd from '../SingleItemAdd';

const AddCategory = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<any>('');
  const AccessToken: any = useSelector(get_access_token);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const HandleSubmit = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      let apiRes: any = await AddCategoryApi(AccessToken?.token, title);
      if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
        toast.success('Category Created');
        dispatch(getCategoryList(AccessToken?.token));
      } else {
        toast.error('Category already exist');
      }
      setError('');
      setInputValue('');
    }
  };

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

export default AddCategory;
