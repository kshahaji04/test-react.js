import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoadMoreChittiListing from './PaginationComponent';
import DeleteAlertModal from '../Modal/DeleteAlertModal';
import useListingHook from '../../hooks/listing-hook';

const ListingTable = ({ tableListingData, userRolesData }: any) => {
  const {
    headingData,
    tableViewData,
    handleSubmitChittiData,
    handlePrint,
    handleCancelChitti,
    handleDeleteChitti,
    HandleTableViewRows,
    isModalOpen,
    setIsModalOpen,
    handleDeleteBtn,
    setHeadingData,
  } = useListingHook();

  const navigate = useNavigate();
  let pathname: any = window.location.pathname;

  useEffect(() => {
    if (Object?.keys(tableListingData)?.length > 0) {
      let column: any = Object?.keys(tableListingData[0]);
      setHeadingData(column);
    }
  }, [tableListingData]);

  let todayDate: any = new Date()
    .toISOString()
    .split('T')[0]
    .split('-')
    .reverse()
    .join('-');

  const userRoleWiseShow: any = (data: any) => {
    let userRoleHasSubmitAccess: any =
      userRolesData?.length > 0 &&
      userRolesData.some((roles: any) => roles.includes('Submit Access'));
    let userRoleHasSaveSubmitAccess: any =
      userRolesData?.length > 0 &&
      userRolesData.some((roles: any) => roles.includes('Save Submit Access'));

    if (pathname === '/purchase-receipt' || pathname === '/sales-return') {
      if (userRoleHasSubmitAccess || userRoleHasSaveSubmitAccess) {
        return (
          <button
            type="button"
            className="btn btn-link button-section-text p-0"
            disabled={data?.date !== todayDate}
            onClick={() => {
              if (data?.date === todayDate) {
                handleSubmitChittiData(data.name);
              }
            }}
          >
            Submit
          </button>
        );
      }
    } else {
      return (
        <button
          type="button"
          className="btn btn-link button-section-text p-0"
          disabled={data?.date !== todayDate}
          onClick={() => {
            if (data?.date === todayDate) {
              handleSubmitChittiData(data.name);
            }
          }}
        >
          Submit
        </button>
      );
    }
  };

  const TableHeading: any = () => {
    return (
      <>
        {headingData?.length > 0 &&
          headingData !== null &&
          headingData.map((heading: any, index: any) => {
            if (heading !== 'name') {
              return (
                <th className="text-uppercase" key={index} scope="col">
                  {heading?.replace('_', ' ')}
                </th>
              );
            }
            if (heading === 'docstatus') {
              return (
                <th className="text-uppercase" key={index} scope="col">
                  Status
                </th>
              );
            }

            return null;
          })}
      </>
    );
  };

  const TableBodyData: any = () => {
    return (
      <>
        {tableListingData?.length > 0 && tableListingData !== null ? (
          <>
            {tableListingData
              .slice(0, tableViewData)
              ?.map((data: any, i: any) => {
                return (
                  <tr className="table-body-row" key={i}>
                    {headingData?.length > 0 && (
                      <td className="border-0">{i + 1}</td>
                    )}
                    {headingData?.length > 0 &&
                      headingData !== null &&
                      headingData.map((v: any, index: any) => {
                        if (v !== 'name') {
                          // Exclude 'date' key
                          return (
                            <td className="border-0 px-0" key={index}>
                              {v !== 'docstatus'
                                ? data[v]
                                : data[v] === 0
                                ? 'Draft'
                                : data[v] === 1
                                ? 'Submitted'
                                : data[v] === 2
                                ? 'Cancel'
                                : data[v]}
                            </td>
                          );
                        }

                        return null;
                      })}
                    {data.docstatus === 0 && (
                      <>
                        <td className=" button-section-td border-0 ">
                          <div className="row justify-content-center gx-0">
                            <div className="col-lg-2 col-md-4 col-12">
                              <NavLink
                                to={`${data.name}`}
                                className="button-section-text text-info "
                              >
                                Edit
                              </NavLink>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                              {userRoleWiseShow(data)}
                            </div>
                            <div className="col-lg-2 col-md-4 col-12">
                              <NavLink
                                to={`${data.name}`}
                                className="button-section-text text-info "
                              >
                                View
                              </NavLink>
                            </div>
                          </div>
                        </td>
                      </>
                    )}
                    {data.docstatus === 1 && (
                      <>
                        <td className="button-section-td border-0">
                          <div className="row justify-content-center gx-0">
                            <div className="col-lg-2 col-md-4 col-12">
                              <a
                                onClick={() => handlePrint(data.name)}
                                className="button-section-text text-primary"
                              >
                                Print
                              </a>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                              <a
                                onClick={() => handleCancelChitti(data.name)}
                                className="button-section-text text-danger "
                              >
                                Cancel
                              </a>
                            </div>
                            <div className="col-lg-2 col-md-4 col-12">
                              <NavLink
                                to={`${data.name}`}
                                className="button-section-text text-info "
                              >
                                View
                              </NavLink>
                            </div>
                          </div>
                        </td>
                      </>
                    )}
                    {data.docstatus === 2 && (
                      <>
                        <td className="button-section-td border-0">
                          <div className="row justify-content-center gx-0">
                            <div className="col-lg-2 col-md-4 col-12">
                              <button
                                type="button"
                                className="btn btn-link button-section-text p-0"
                                disabled={data?.date !== todayDate}
                                onClick={() => {
                                  if (data?.date === todayDate) {
                                    navigate(`${data.name}`);
                                  }
                                }}
                              >
                                Amend
                              </button>
                            </div>

                            <div className="col-lg-4 col-md-4 col-12">
                              <button
                                type="button"
                                className="btn btn-link button-section-text p-0"
                                disabled={data?.date !== todayDate}
                                onClick={() => {
                                  if (data?.date === todayDate) {
                                    handleDeleteChitti(data.name);
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </div>
                            <div className="col-lg-2 col-md-4 col-12">
                              <NavLink
                                to={`${data.name}`}
                                className="button-section-text text-info"
                              >
                                View
                              </NavLink>
                            </div>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
          </>
        ) : (
          ''
        )}
      </>
    );
  };

  return (
    <>
      <div className="table-responsive ">
        {tableListingData?.length > 0 && (
          <div className="text-end text-gray">
            {tableListingData?.slice(0, tableViewData)?.length} of{' '}
            {tableListingData?.length < 10
              ? '0' + tableListingData?.length
              : tableListingData?.length}
          </div>
        )}

        <table className="table table table-striped table-hover listing-table border-0">
          <thead className="table-heading">
            <tr className="table-heading-row px-0">
              {headingData?.length > 0 && <th>Sr No.</th>}
              {TableHeading()}
              <th className="w-25" scope="col"></th>
            </tr>
          </thead>
          <tbody>{TableBodyData()}</tbody>
        </table>
        <LoadMoreChittiListing
          tableListingData={tableListingData}
          HandleTableViewRows={HandleTableViewRows}
        />
      </div>

      {isModalOpen && (
        <DeleteAlertModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleDeleteBtn={handleDeleteBtn}
        />
      )}
    </>
  );
};

export default ListingTable;
