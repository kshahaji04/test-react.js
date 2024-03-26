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
  const accessToken: any = useSelector(get_access_token);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      let apiRes: any = await AddCategoryApi(accessToken?.token, title);
      if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
        toast.success('Category Created');
        dispatch(getCategoryList(accessToken?.token));
      } else {
        toast.error('Category already exist');
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

export default AddCategory;
