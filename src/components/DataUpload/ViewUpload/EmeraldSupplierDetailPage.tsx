import React, { useState } from 'react';
import UseEmeraldSupplierDetailHook from '../../../hooks/dataUpload/emerald-supplier-detail-hook';
import DownloadEmeraldSupplierTableData from '../../../services/api/dataUpload/get-emerald-supplier-table-data-api';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../../services/Config/api-config';
import { get_emerald_supplier_details } from '../../../store/slices/dataUpload/get-emerald-supplier-details-slice';

const EmeraldSupplierDetailPage = () => {
  const { emeraldSupplierDetail } = UseEmeraldSupplierDetailHook();
  const navigate = useNavigate();
  const EmeraldSupplierDetailsFromStore: any = useSelector(
    get_emerald_supplier_details
  );
  console.log('emeraldSupplierDetail in tsx', EmeraldSupplierDetailsFromStore);
  const AccessToken: any = useSelector(get_access_token);
  const { id } = useParams();

  const HandleDownloadSupplierData: any = async () => {
    let downloadSupplierDataApi: any = await DownloadEmeraldSupplierTableData(
      AccessToken?.token,
      id
    );

    if (downloadSupplierDataApi?.data?.message?.status === 'success') {
      window.open(
        `${BASE_URL}${downloadSupplierDataApi?.data?.message?.file_url}`
      );
    }
  };
  return (
    <div className="container mb-5">
      <hr className="hr_line my-2" />

      <div className="row mb-2">
        <div className="col-lg-1">
          <button
            type="button"
            className="btn btn-outline-primary py-0 btn-sm"
            onClick={() => navigate(-1)}
            title="Back"
          >
            Back
          </button>
        </div>
        <div className="col-lg-6 fs-6 ">
          <span className="text-secondary" title="Emerald Supplier">
            Emerald Supplier :{' '}
          </span>{' '}
          <b>{id}</b>
        </div>
      </div>

      <div className="row mb-4 ">
        <div className="col-lg-4">
          <div className="form-group">
            <label htmlFor="usr" className="text-secondary">
              Supplier
            </label>
            <input
              type="text"
              className="form-control w-50 p-1"
              value={emeraldSupplierDetail[0]?.supplier}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="usr" className="text-secondary">
              Date
            </label>
            <input
              type="text"
              className="form-control w-50 p-1"
              value={emeraldSupplierDetail[0]?.date}
              readOnly
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label htmlFor="usr" className="text-secondary">
              Total No of Rows
            </label>
            <input
              type="text"
              className="form-control w-50 p-1"
              value={emeraldSupplierDetail[0]?.total_no_of_rows}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="usr" className="text-secondary">
              Total of Grosswt
            </label>
            <input
              type="text"
              className="form-control w-50 p-1"
              value={emeraldSupplierDetail[0]?.total_of_grosswt}
              readOnly
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group ">
            <label htmlFor="usr " className="text-secondary">
              Total of Netwt
            </label>
            <input
              type="text"
              className="form-control w-50 p-1"
              value={emeraldSupplierDetail[0]?.total_of_netwt}
              readOnly
            />
          </div>
        </div>
      </div>

      {EmeraldSupplierDetailsFromStore?.isLoading === 'pending' &&
        Object?.keys(EmeraldSupplierDetailsFromStore.data)?.length === 0 && (
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border " role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}

      <div className="table-responsive my-2 emerald-supplier-table-container">
        {emeraldSupplierDetail[0]?.emerald_supplier_table?.length > 0 &&
        emeraldSupplierDetail[0]?.emerald_supplier_table !== null ? (
          <>
            <table className="table table table-striped table-hover listing-table border-0">
              <thead className="table-heading">
                <tr className="table-heading-row text-uppercase">
                  <th scope="col">No</th>
                  <th scope="col" className="px-3">
                    TRANSFERID
                  </th>
                  <th scope="col">RFID</th>
                  <th scope="col" className="px-4">
                    SKUNUMBER
                  </th>
                  <th scope="col" className="px-4">
                    PACKAGEID
                  </th>
                  <th scope="col">Photonumber</th>
                  <th scope="col">INVENTSIZEID</th>
                  <th scope="col" className="px-4">
                    PURITY
                  </th>
                  <th scope="col">GROSSWT</th>
                  <th scope="col">StoneWt</th>
                  <th scope="col">NetWT</th>
                  <th scope="col">STUDBOMQTY</th>
                  <th scope="col">STUDBOMAMOUNT</th>
                  <th scope="col">NONGOLDWT</th>
                  <th scope="col">TNOGOLDRATE</th>
                  <th scope="col">NMPCOST</th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col" className="px-5 ">
                    PROJECT
                  </th>

                  <th scope="col">MC</th>
                  <th scope="col">MakingUnit</th>
                  <th scope="col">EJ_HUID</th>
                  <th scope="col">Textbox2</th>
                </tr>
              </thead>
              <tbody>
                {emeraldSupplierDetail?.length > 0 &&
                emeraldSupplierDetail !== null ? (
                  <>
                    {emeraldSupplierDetail.map((detail: any, index: any) => (
                      <>
                        {detail?.emerald_supplier_table?.length > 0 &&
                        detail?.emerald_supplier_table !== null ? (
                          <>
                            {detail?.emerald_supplier_table?.map(
                              (values: any, i: any) => {
                                return (
                                  <>
                                    <tr className="table-body-r">
                                      <td>{i + 1}</td>
                                      <td>{values.transferid}</td>
                                      <td>{values.rfid}</td>
                                      <td>{values.skunumber}</td>
                                      <td>{values.packageid}</td>
                                      <td>{values.photonumber}</td>
                                      <td>{values.inventsizeid}</td>
                                      <td>{values.purity}</td>
                                      <td>{values.grosswt}</td>
                                      <td>{values.stonewt}</td>
                                      <td>{values.netwt}</td>
                                      <td>{values.studbomqty}</td>
                                      <td>{values.studbomamount}</td>
                                      <td>{values.nongoldwt}</td>
                                      <td>{values.tnogoldrate}</td>
                                      <td>{values.nmpcost}</td>
                                      <td>{values.product}</td>
                                      <td>{values.project}</td>
                                      <td>{values.mc}</td>
                                      <td>{values.makingunit}</td>
                                      <td>{values.ej_huid}</td>
                                      <td>{values.textbox2}</td>
                                    </tr>
                                  </>
                                );
                              }
                            )}
                          </>
                        ) : (
                          ''
                        )}
                      </>
                    ))}
                  </>
                ) : (
                  ''
                )}
              </tbody>
            </table>
            {/* <div className="d-flex justify-content-end mt-2">
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm p-0 px-2"
                onClick={HandleDownloadSupplierData}
                >
                Download
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm p-0 px-2 mx-4"
                >
                Upload
              </button>
            </div>
          </div> */}
          </>
        ) : (
          <div className="my-5 text-center">
            {/* <h5>No Records Found...</h5> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmeraldSupplierDetailPage;
