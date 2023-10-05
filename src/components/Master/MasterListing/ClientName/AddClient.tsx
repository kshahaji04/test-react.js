import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import AddClientNameApi from '../../../../services/api/Master/add-client-name-api';

const AddClient = () => {

  const dispatch = useDispatch();
  const [title, setTitle] = useState<any>('');
  const [clientGroup, setClientGroup] = useState<any>('');
  const AccessToken: any = useSelector(get_access_token);


  const HandleSubmit:any = async() => {
    let apiRes:any = await AddClientNameApi(AccessToken?.token,title,clientGroup)
    console.log("apires",apiRes)
    setClientGroup("")
    setTitle("")
    if(apiRes?.status === 200 && apiRes?.hasOwnProperty("data")){
      toast.success('Client Group Created');
    }
  }

  const HandleInputValue = (e:any) => {
    console.log(e.target.value)
    setTitle(e.target.value)
  }
  const HandleClientInput = (e:any) => {
    console.log(e.target.value)
    setClientGroup(e.target.value)
  }
  return (
    <div className="container mt-2">
      <label htmlFor="basic-url " className="fs-6 text-center">
        Title
      </label>
      <div className="input-group  w-50 master-input-field">
        <input
          type="text"
          name="title"
          className="form-control ps-2"
          id="title"
          aria-describedby="basic-addon3"
          onChange={HandleInputValue}
        />
      </div>
      <label htmlFor="basic-url " className="fs-6 mt-1 text-center">
        Client Group
      </label>
      <div className="input-group w-50 master-input-field">
        <input
          type="text"
          name="clientGroup"
          className="form-control ps-2"
          id="clientGroup"
          aria-describedby="basic-addon3"
          onChange={HandleClientInput}
        />
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
