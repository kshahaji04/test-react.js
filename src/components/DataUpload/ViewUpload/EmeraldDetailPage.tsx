import React, { useState } from 'react';
import UseEmeraldDetailHook from '../../../hooks/dataUpload/emerald-detail-hook';
import DownloadEmeraldSupplierTableData from '../../../services/api/dataUpload/get-emerald-supplier-table-data-api';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../services/Config/api-config';

const EmeraldDetailPage = () => {
  const { emeraldDetail } = UseEmeraldDetailHook();
  console.log('emeraldDetail', emeraldDetail);
  const AccessToken: any = useSelector(get_access_token);
  const { id } = useParams();

  // let itemsPerPage: any = 50;
  // const [currentPage, setCurrentPage] = useState<any>(1);

  // const start = (currentPage - 1) * itemsPerPage;
  // const end = currentPage * itemsPerPage;
  // const currentList = emeraldDetail?.emerald_table[(start, end)];

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
      <div className="row mb-4">
        <div className="col-lg-4">
          <div className="form-group">
            <label htmlFor="usr" className="text-secondary">
              Supplier
            </label>
            <input
              type="text"
              className="form-control w-50 p-1"
              value={emeraldDetail[0]?.supplier}
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
              value={emeraldDetail[0]?.date}
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
              value={emeraldDetail[0]?.total_no_of_rows}
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
              value={emeraldDetail[0]?.total_of_grosswt}
              readOnly
            />
          </div>
        </div>
        <div className="col-lg-4 my-auto">
          <div className="form-group ">
            <label htmlFor="usr " className="text-secondary">
              Total of Netwt
            </label>
            <input
              type="text"
              className="form-control w-50 p-1"
              value={emeraldDetail[0]?.total_of_netwt}
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="table-responsive my-2 emerald_table_container">
        <table className="table table-bordered emerald-table">
          <thead>
            <tr>
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
              {/* <th scope="col">Sub Category</th> */}
              <th scope="col">MC</th>
              <th scope="col">MakingUnit</th>
              <th scope="col">EJ_HUID</th>
              <th scope="col">Textbox2</th>
            </tr>
          </thead>
          {emeraldDetail?.length > 0 && emeraldDetail !== null ? (
            <>
              {emeraldDetail.map((detail: any, index: any) => (
                <>
                  {detail?.emerald_supplier_table?.length > 0 &&
                  detail?.emerald_supplier_table !== null ? (
                    <>
                      {detail?.emerald_supplier_table?.map(
                        (values: any, i: any) => {
                          return (
                            <>
                              <tbody>
                                <tr className="">
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
                              </tbody>
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
        </table>
      </div>
      <div className="d-flex justify-content-end mt-2">
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
      </div>
    </div>
  );
};

export default EmeraldDetailPage;
