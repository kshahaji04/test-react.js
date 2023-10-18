import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import AddClientGroupApi from '../../../../services/api/Master/add-client-group-api';
import { toast } from 'react-toastify';
import { getClientGroupList } from '../../../../store/slices/Chitti/get-client-group-list-slice';

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
      console.log('apires', title);
      if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
        toast.success('Client Group Created');
        dispatch(getClientGroupList(AccessToken?.token));
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
      </label>
      <span className="text-danger">*</span>
      <div className="input-group mb-1 w-50 master-input-field">
        <input
          type="text"
          name="title"
          className="form-control ps-2"
          id="basic-url"
          aria-describedby="basic-addon3"
          onChange={HandleInputValue}
          value={inputValue}
          required
        />
      </div>
      <div className=""> {error && <p className="text-danger">{error}</p>}</div>
      <div className="d-flex justify-content-start ">
        <button
          type="submit"
          onClick={HandleSubmit}
          className=" btn btn-outline-primary py-1 mt-2 form-submit-button"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddClientGroup;
