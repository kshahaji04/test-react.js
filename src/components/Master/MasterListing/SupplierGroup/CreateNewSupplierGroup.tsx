import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import { getSupplierGroupList } from '../../../../store/slices/Master/get-supplier-group-slice';
import CreateNewProductData from '../CreateNewProductData';
import CreateNewSupplierGroupApi from '../../../../services/api/Master/create-new-supplier-group-api';

const CreateNewSupplierGroup = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<any>('');
  const AccessToken: any = useSelector(get_access_token);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const HandleSubmit = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      let apiRes: any = await CreateNewSupplierGroupApi(
        AccessToken?.token,
        title
      );
      console.log('apires', title);
      if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
        toast.success('Supplier Group Create');
        dispatch(getSupplierGroupList(AccessToken?.token));
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
    <div>
      <CreateNewProductData
        inputValue={inputValue}
        HandleInputValue={HandleInputValue}
        error={error}
        HandleSubmit={HandleSubmit}
      />
    </div>
  );
};

export default CreateNewSupplierGroup;