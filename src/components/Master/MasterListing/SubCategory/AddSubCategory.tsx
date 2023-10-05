import React from 'react'
import SelectedInputDropdown from '../../../SelectedInputDropdown'

const AddSubCategory = () => {
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
        // onChange={HandleInputValue}
      />
    </div>
    <label htmlFor="basic-url " className="fs-6 mb-1 text-center">
      Category
    </label>
    <SelectedInputDropdown
              // drowpdownlist={}
              // bgColor={bgColor}
              placeholderValue="Client Name"
              // selectedDropdownValue={selectedDropdownValue}
              // setSelectedDropdownValue={setSelectedDropdownValue}
              // clientGroupList={clientGroupList}
              // HandleClientGroup={HandleClientGroup}
           
            />
    <div className="d-flex justify-content-start ">
      <button
        type="submit"
        // onClick={HandleSubmit}
        className=" btn btn-outline-primary py-1 mt-2 form-submit-button"
      >
        Save
      </button>
      </div>
  </div>
  )
}

export default AddSubCategory