import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getClientGroupList } from '../../../../store/slices/Chitti/get-client-group-list-slice';

const MasterPageClientGroupDetails = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<any>('');
  const [showSubmitButton, setShowSubmitButton] = useState<any>(false);
  const [error, setError] = useState('');
  const AccessToken: any = useSelector(get_access_token);

  const { id } = useParams();

  const HandleInputField: any = (e: any) => {
    setInputValue(e.target.value);
    setShowSubmitButton(true);
  };

  const HandleSubmit = async () => {
    if (inputValue.trim() === '') {
      setError('Input field cannot be empty');
    } else {
      // let apiRes: any = await (AccessToken?.token, inputValue);

      // if (apiRes?.status === 200 && apiRes?.hasOwnProperty('data')) {
      //   toast.success('Client Group Created');
      //   dispatch(getClientGroupList(AccessToken?.token));
      // }
      setError('');
      setInputValue('');
    }
  };

  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="card mt-2">
        <div className="card-header">
          <div className="d-flex justify-content-between ">
            <button
              type="submit"
              onClick={() => navigate(-1)}
              className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
            >
              Back
            </button>
            {/* {showSubmitButton && (
              <button
                type="submit"
                onClick={HandleSubmit}
                className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
              >
                Save
              </button>
            )} */}
          </div>
        </div>
        <div className="my-2 p-4">
          <label htmlFor="basic-url " className="fs-5">
            Client group
            <span className="text-danger">*</span>
          </label>
          <div className="input-group my-2 w-25">
            <input
              type="text"
              className="form-control py-1 ps-1"
              // value={inputValue}
              defaultValue={id}
              required
              id="basic-url"
              onChange={HandleInputField}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPageClientGroupDetails;
