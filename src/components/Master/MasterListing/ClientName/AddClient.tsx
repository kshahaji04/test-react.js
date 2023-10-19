import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import AddClientNameApi from '../../../../services/api/Master/add-client-name-api';
import SelectedInputDropdown from '../../../SelectedInputDropdown';
import { getClientName } from '../../../../store/slices/Chitti/get-client-name-slice';
import { getClientNameClientGroup } from '../../../../store/slices/Master/get-clientname-clientgroup-slice';

const AddClient = ({ clientGroupList }: any) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<any>('');

  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const AccessToken: any = useSelector(get_access_token);

  const HandleSubmit: any = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      let apiRes: any = await AddClientNameApi(
        AccessToken?.token,
        title,
        selectedDropdownValue
      );
      console.log('apires', apiRes);

      setTitle('');
      if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
        toast.success('New Client Created');
        dispatch(getClientNameClientGroup(AccessToken?.token));
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
    <div className="container mt-2">
      <label htmlFor="basic-url " className="fs-6 text-center">
        Title
        <span className="text-danger">*</span>
      </label>
      <div className="input-group  w-50 master-input-field">
        <input
          type="text"
          name="title"
          className="form-control ps-2"
          id="title"
          aria-describedby="basic-addon3"
          onChange={HandleInputValue}
          value={inputValue}
        />
      </div>
      <div className=""> {error && <p className="text-danger">{error}</p>}</div>
      <label htmlFor="basic-url " className="fs-6 mt-1 text-center">
        Client Group
        <span className="text-danger">*</span>
      </label>
      <div className="input-group w-50 master-input-field">
        <div className="w-100 ">
          <SelectedInputDropdown
            drowpdownlist={clientGroupList}
            // bgColor={bgColor}
            placeholderValue="Client Group"
            selectedDropdownValue={selectedDropdownValue}
            setSelectedDropdownValue={setSelectedDropdownValue}
          />
        </div>
      </div>
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

export default AddClient;
