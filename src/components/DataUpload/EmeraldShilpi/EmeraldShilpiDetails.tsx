import UseEmeraldShilpiDetails from '../../../hooks/emerald-shilpi/emerald-shilpi-detail-hook';
import { useNavigate, useParams } from 'react-router-dom';
import { get_Emerald_shilpi_details } from '../../../store/slices/emerald-shilpi/get-emerald-shilpi-details-slice';
import { useSelector } from 'react-redux';
import TopSectionOfDataUploadTableDetails from '../TopSectionOfDataUploadTableDetails';

const EmeraldShilpiDetails = () => {
  const navigate = useNavigate();
  const { id }: any = useParams();
  const { emeraldShilpiDetails }: any = UseEmeraldShilpiDetails();
  console.log('emeraldshilpidetails', emeraldShilpiDetails);
  const emeraldShilpiDetailsDataFromStore: any = useSelector(
    get_Emerald_shilpi_details
  );

  return (
    <div className="container mb-5">
      {emeraldShilpiDetailsDataFromStore?.isLoading === 'pending' &&
      Object?.keys(emeraldShilpiDetailsDataFromStore.data)?.length === 0 ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border " role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <hr className="hr_line my-2" />
          <div className="row mb-1">
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
              <span className="text-secondary" title="Emerald Shilpi">
                Emerald Shilpi :{' '}
              </span>{' '}
              <b>{id}</b>
            </div>
          </div>

          <TopSectionOfDataUploadTableDetails details={emeraldShilpiDetails} />

          <div className="table-responsive emerald-shilpi-table-container">
            {emeraldShilpiDetails[0]?.emerald_supplier_table?.length > 0 &&
            emeraldShilpiDetails[0]?.emerald_supplier_table !== null ? (
              <>
                <table className="table table table-striped table-hover listing-table border-0">
                  <thead className="table-heading sticky-top">
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
                        {emeraldShilpiDetails.map((detail: any) => (
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
              <div className="text-center mt-5">
                {/* <h5>No Records Found...</h5> */}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default EmeraldShilpiDetails;
