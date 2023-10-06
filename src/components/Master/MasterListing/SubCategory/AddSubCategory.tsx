import React, { useState } from 'react'
import SelectedInputDropdown from '../../../SelectedInputDropdown'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../../store/slices/auth/token-login-slice';
import { Toast } from 'react-bootstrap';
import AddSubCategoryApi from '../../../../services/api/Master/add-sub-category-api';

const AddSubCategory = ({ CategoryList }: any) => {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const [title, setTitle] = useState<any>('');

  const AccessToken: any = useSelector(get_access_token);


  const HandleSubmit: any = async () => {
    console.log("selectedDropdownValue", selectedDropdownValue)
    let apiRes: any = await AddSubCategoryApi(AccessToken?.token, title, selectedDropdownValue)
    console.log("apires", apiRes)

    setTitle("")
    if (apiRes?.status === 200 && apiRes?.hasOwnProperty("data")) {
      toast.success('Sub Category Created');
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
      <label htmlFor="basic-url " className="fs-6 mb-1 text-center">
        Category
      </label>
      <div className='w-50'>

        <SelectedInputDropdown
          drowpdownlist={CategoryList}
          // bgColor={bgColor}
          placeholderValue="Category Name"
          selectedDropdownValue={selectedDropdownValue}
          setSelectedDropdownValue={setSelectedDropdownValue}
        // clientGroupList={clientGroupList}
        // HandleClientGroup={HandleClientGroup}

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
  )
}

export default AddSubCategory