import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import AddHuidProductApi from '../../../../services/api/Master/add-huid-product-api';

const AddHuidProduct = () => {

  const [title, setTitle] = useState<any>('');

  const AccessToken: any = useSelector(get_access_token);


  const HandleSubmit: any = async () => {
    let apiRes: any = await AddHuidProductApi(AccessToken?.token, title)
    console.log("apires", apiRes)

    setTitle("")
    if (apiRes?.status === 200 && apiRes?.hasOwnProperty("data")) {
      toast.success('HUID Product Added');
    }
  }

  const HandleInputValue = (e: any) => {
    console.log(e.target.value)
    setTitle(e.target.value)
  }

  return (
    <div className="container mt-1">
      <label htmlFor="basic-url " className="fs-6 mb-1 text-center">
        Title
      </label>
      <div className="input-group mb-3 w-50 master-input-field">
        <input
          type="text"
          name='title'
          className="form-control ps-2"
          id="basic-url"
          aria-describedby="basic-addon3"
          onChange={HandleInputValue}
        />
      </div>
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
  )
}

export default AddHuidProduct