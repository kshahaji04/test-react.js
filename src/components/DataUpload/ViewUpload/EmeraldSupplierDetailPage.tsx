import UseEmeraldSupplierDetailHook from '../../../hooks/dataUpload/emerald-supplier-detail-hook';

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { get_emerald_supplier_details } from '../../../store/slices/dataUpload/get-emerald-supplier-details-slice';
import TopSectionOfDataUploadTableDetails from '../TopSectionOfDataUploadTableDetails';

const EmeraldSupplierDetailPage = () => {
  const { emeraldSupplierDetail } = UseEmeraldSupplierDetailHook();
  const navigate = useNavigate();
  const EmeraldSupplierDetailsFromStore: any = useSelector(
    get_emerald_supplier_details
  );
  console.log('emeraldSupplierDetail in tsx', EmeraldSupplierDetailsFromStore);

  const { id } = useParams();

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
      <TopSectionOfDataUploadTableDetails details={emeraldSupplierDetail} />

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
            <table className="table table table-striped table-hover listing-table border-0 ">
              <thead className="table-heading sticky-top">
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
