import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import AddHuidProductApi from '../../../../services/api/Master/add-huid-product-api';
import { getHuidProductList } from '../../../../store/slices/Master/get-huid-product-slice';
import CreateNewProductData from '../CreateNewProductData';

const AddHuidProduct = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<any>('');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const AccessToken: any = useSelector(get_access_token);

  console.log('inputValue', inputValue);

  const HandleSubmit: any = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      let apiRes: any = await AddHuidProductApi(AccessToken?.token, title);
      console.log('apires', apiRes);

      setTitle('');
      if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
        toast.success('HUID Product Added');
        dispatch(getHuidProductList(AccessToken?.token));
      } else {
        toast.error('HUID product already exist');
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
      <CreateNewProductData
        inputValue={inputValue}
        HandleInputValue={HandleInputValue}
        error={error}
        HandleSubmit={HandleSubmit}
      />
    </>
  );
};

export default AddHuidProduct;
