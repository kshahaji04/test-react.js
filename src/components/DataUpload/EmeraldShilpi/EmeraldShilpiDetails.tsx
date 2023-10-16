import React from 'react';
import UseEmeraldShilpiDetails from '../../../hooks/emerald-shilpi/emerald-shilpi-detail-hook';
import { useNavigate } from 'react-router-dom';

const EmeraldShilpiDetails = () => {
  const navigate = useNavigate();
  const { emeraldShilpiDetails }: any = UseEmeraldShilpiDetails();
  console.log('emeraldShilpiDetails in tsx', emeraldShilpiDetails);

  return (
    <div className="container mb-5">
      <hr className="hr_line my-3" />
      <div className="d-flex justify-content-between my-1">
        <div>
          <button
            type="button"
            className="btn btn-outline-primary py-0 btn-sm"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-lg-4">
          <div className="form-group">
            <label htmlFor="usr" className="text-secondary">
              Supplier
            </label>
            <input
              type="text"
              className="form-control w-50 p-1"
              value={emeraldShilpiDetails[0]?.supplier}
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
              value={emeraldShilpiDetails[0]?.date}
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
              value={emeraldShilpiDetails[0]?.total_no_of_rows}
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
              value={emeraldShilpiDetails[0]?.total_of_grosswt}
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
              value={emeraldShilpiDetails[0]?.total_of_netwt}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="table-responsive">
        {emeraldShilpiDetails[0]?.emerald_supplier_table?.length > 0 &&
        emeraldShilpiDetails[0]?.emerald_supplier_table !== null ? (
          <>
            <table className="table table table-striped table-hover listing-table border-0">
              <thead className="table-heading">
                <tr className="emerald-shilpi-table-heading-row">
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
                  <th scope="col" className="px-5 sub-category-head-table">
                    SubCategory
                  </th>
                  <th scope="col">MC</th>
                  <th scope="col">MakingUnit</th>
                  <th scope="col">EJ_HUID</th>
                  <th scope="col">Textbox2</th>
                  <th className="w-25" scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {emeraldShilpiDetails?.length > 0 &&
                emeraldShilpiDetails !== null ? (
                  <>
                    {emeraldShilpiDetails.map((detail: any, index: any) => (
                      <>
                        {detail?.emerald_supplier_table?.length > 0 &&
                        detail?.emerald_supplier_table !== null ? (
                          <>
                            {detail?.emerald_supplier_table?.map(
                              (values: any, i: any) => {
                                return (
                                  <>
                                    <tr className="table-body-r" key={i}>
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
                                      <td>{values.sub_category}</td>
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
          </>
        ) : (
          'no data'
        )}
      </div>
    </div>
  );
};

export default EmeraldShilpiDetails;
