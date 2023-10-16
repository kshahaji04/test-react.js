import React, { useState, useEffect } from 'react';

import GetBlankExcelApi from '../../../services/api/dataUpload/download-blank-excelsheet-api';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../../services/Config/api-config';
import { useNavigate } from 'react-router-dom';

const DataUpload = () => {
  const navigate = useNavigate();
  const [selectedDropdownValue, setSelectedDropdownValue] = useState<any>('');
  const AccessToken: any = useSelector(get_access_token);

  const handleFileUploadInput: any = (e: any) => {
    console.log('file upload', e.target.files);
  };

  // const HandleDownloadTemplate: any = async () => {
  //   let downloadBlankExcelApi: any = await GetBlankExcelApi(AccessToken?.token);

  //   if (
  //     downloadBlankExcelApi?.status === 200 &&
  //     downloadBlankExcelApi?.data?.message?.status === 'success'
  //   ) {
  //     window.open(
  //       `${BASE_URL}/${downloadBlankExcelApi?.data?.message?.file_url}`
  //     );
  //   }
  // };

  return (
    <div className="container mt-5">
      <a href={`${BASE_URL}/app/emerald-supplier/new-emerald-supplier-1`}>
        <button
          type="button"
          className="btn btn-outline-primary text-uppercase btn-sm"
        >
          <span className="">Create Emerald Supplier</span>
        </button>
      </a>

      {/* <div className="d-flex justify-content-end my-2">
        <button
          type="submit"
          onClick={HandleCreateChittiSubmit}
          className=" btn btn-outline-primary mx-3 px-2 py-0 form-submit-button"
        >
          Save
        </button>
      </div>
      <div className="card ">
        <div className="card-body">
          <label
            htmlFor="basic-url "
            className="fs-6 mb-1 text-center form-label-bold"
          >
            Supplier
          </label>
          <div className="input-group mb-3 w-50 ">
            <div className="w-100">
              <select
                id="category"
                name="category"
                className="form-select p-0 px-2 ustom-input-field "
                aria-label=".form-select-sm example"
                onChange={HandleSupplier}
              >
                <option></option>
                {supplierList?.length > 0 &&
                  supplierList !== null &&
                  supplierList.map((supplier: any, index: any) => {
                    return (
                      <option key={index}>{Object.values(supplier)}</option>
                    );
                  })}
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
              className="form-control custom-input-field py-0 px-2"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div className="my-4">
            <button
              type="button"
              className="btn btn-outline-primary text-uppercase btn-sm"
              onClick={HandleDownloadTemplate}
            >
              <span className="download-template-btn">download template</span>
            </button>
          </div>
          <div>
            <input
              type="file"
              name="fileupload"
              id="fileupload"
              onChange={(e) => handleFileUploadInput(e)}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DataUpload;
