import React, { useState } from 'react';
import SelectedInputDropdown from '../../SelectedInputDropdown';

const DataUpload = ({ supplierList, HandleSupplier }: any) => {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');

  const handleFileUploadInput: any = (e: any) => {
    console.log('file upload', e.target.value);
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-end my-2">
        <button
          type="submit"
          // onClick={HandleCreateChittiSubmit}
          className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
        >
          Save
        </button>
      </div>
      <div className="card ">
        <div className="card-body">
          <label htmlFor="basic-url " className="fs-6 mb-1 text-center form-label-bold">
            Supplier
          </label>
          <div className="input-group mb-3 w-50 ">
            <div className='w-100'>

              <select
                id="category"
                name="category"
                className="form-select p-0 px-2 ustom-input-field "
                aria-label=".form-select-sm example"
                onChange={HandleSupplier}

              >
                <option></option>
                {
                  supplierList?.length > 0 && supplierList !== null && (
                    supplierList.map((supplier: any, index: any) => {
                      return (
                        <option key={index}>
                          {Object.values(supplier)}
                        </option>
                      )
                    })
                  )
                }
              </select>
            </div>
          </div>
          <label className="form-Form.Label fs-6 text-dark form-label-bold">
            Date :
          </label>
          <div className="d-flex justify-content-between w-50">
            <input
              type="date"
              id="date"
              name="date"
              // defaultValue={defaultData?.date}
              // value={currentDate}
              className="form-control custom-input-field py-0 px-2"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            // onChange={HandleDateChange}
            />
          </div>
          <div className="my-4">
            <button type="button" className="btn btn-outline-primary text-uppercase btn-sm">
              <span className='download-template-btn'>

                download template
              </span>
            </button>
          </div>
          <div>
            {/* <form > */}
            <input
              type="file"
              name="fileupload"
              // value="fileupload"
              id="fileupload"
              onChange={handleFileUploadInput}
            />


          </div>
        </div>
      </div>

    </div>
  );
};

export default DataUpload;
