import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import AddHuidProductApi from '../../../../services/api/Master/add-huid-product-api';
import { getHuidProductList } from '../../../../store/slices/Master/get-huid-product-slice';

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
    <div className="container mt-1">
      <label htmlFor="basic-url " className="fs-6 mb-1 text-center">
        Title
        <span className="text-danger">*</span>
      </label>
      <div className="input-group mb-3 w-50 master-input-field">
        <input
          type="text"
          name="title"
          className="form-control ps-2"
          id="basic-url"
          aria-describedby="basic-addon3"
          onChange={HandleInputValue}
          value={inputValue}
        />
      </div>
      <div className=""> {error && <p className="text-danger">{error}</p>}</div>
      <div className="d-flex justify-content-start ">
        <button
          type="submit"
          onClick={HandleSubmit}
          className="btn btn-outline-primary py-1 mt-2 form-submit-button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddHuidProduct;
