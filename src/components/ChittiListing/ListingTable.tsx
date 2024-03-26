import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import DeleteChallanChittiApi from '../../services/api/Chitti/delete-challan-chitti-api';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { getChittiChallan } from '../../store/slices/Chitti/get-chitti-challan-list-slice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import DeleteEmeraldChittiApi from '../../services/api/Emerald/delete-emerald-chitti-api';
import { getEmeraldChallan } from '../../store/slices/Emerald/get-emerald-list-slice';
import PrintChallanChittiApi from '../../services/api/Chitti/print-challan-chitti-api';
import PrintEmeraldChittiApi from '../../services/api/Emerald/print-emerald-chitti-api';
import { UpdateDocStatusChallanApi } from '../../services/api/general/update-doc-status-challan--api';
import { UpdateDocStatusEmeraldChittiApi } from '../../services/api/general/update-doc-status-emrald-chitti-api';
import {
  getSpecificEmeraldChitti,
  get_specific_emerald_chitti,
} from '../../store/slices/Emerald/get-specific-emrald-slice';
import LoadMoreChittiListing from './LoadMoreChittiListing';

const ListingTable = ({ tableListingData }: any) => {
  // console.log('tableListingData', tableListingData);
  const dispatch = useDispatch();
  const accessToken: any = useSelector(get_access_token);

  const emeraldChittiDataFromStore: any = useSelector(
    get_specific_emerald_chitti
  );

  const storedNumberOfRows = sessionStorage.getItem('numberOfRows');
  let pathName: any = window?.location?.pathname;

  const [headingData, setHeadingData] = useState<any>('');
  const [tableViewData, setTableViewData] = useState<number>(
    storedNumberOfRows ? parseInt(storedNumberOfRows) : 5
  );

  const HandleTableViewRows: any = (rows: any) => {
    sessionStorage.setItem('numberOfRows', rows);
    setTableViewData(rows);
  };

  useEffect(() => {
    sessionStorage.removeItem('numberOfRows');
  }, [pathName]);

  useEffect(() => {
    if (Object?.keys(tableListingData)?.length > 0) {
      let column: any = Object?.keys(tableListingData[0]);
      setHeadingData(column);
    }
  }, [tableListingData]);

  const handleSubmitChittiData: any = async (name: any) => {
    if (window?.location?.pathname === '/chitti') {
      let updateDocStatus: any = await UpdateDocStatusChallanApi(
        accessToken?.token,
        '1',
        name
      );

      if (
        updateDocStatus?.status === 200 &&
        Object.keys(updateDocStatus?.data)?.length > 0
      ) {
        dispatch(getChittiChallan(accessToken?.token));
      }
    } else if (window?.location?.pathname === '/emeraldchitti') {
      const params: any = {
        token: accessToken?.token,
        name: name,
      };
      dispatch(getSpecificEmeraldChitti(params));

      if (emeraldChittiDataFromStore?.data?.length > 0) {
        const hasEmptySubCategory =
          emeraldChittiDataFromStore?.data[0]?.challan_table?.some(
            (obj: any) => !obj.sub_category
          );
        console.log('has category', hasEmptySubCategory);
        if (hasEmptySubCategory) {
          toast.error('Please Select Sub Category');
        } else {
          let updateDocStatus: any = await UpdateDocStatusEmeraldChittiApi(
            accessToken?.token,
            '1',
            name
          );
          if (
            updateDocStatus?.status === 200 &&
            Object.keys(updateDocStatus?.data)?.length > 0
          ) {
            dispatch(getEmeraldChallan(accessToken?.token));
          }
        }
      }
    }
  };

  const handleDeleteChitti: any = async (name: any) => {
    if (window?.location?.pathname === '/chitti') {
      let deleteChallanApiRes: any = await DeleteChallanChittiApi(
        accessToken?.token,
        name
      );

      console.log('deleteChallanApiRes', deleteChallanApiRes);

      if (deleteChallanApiRes?.message?.status === 'success') {
        toast.success('Chitti Deleted');
        dispatch(getChittiChallan(accessToken?.token));
      } else {
        toast.error(deleteChallanApiRes?.message?.message);
      }
    } else if (window?.location?.pathname === '/emeraldchitti') {
      let deleteEmeraldApiRes: any = await DeleteEmeraldChittiApi(
        accessToken?.token,
        name
      );
      console.log('deleteChallanApiRes', deleteEmeraldApiRes);
      if (deleteEmeraldApiRes?.message?.status === 'success') {
        toast.success('Chitti Deleted');
        dispatch(getEmeraldChallan(accessToken?.token));
      } else {
        toast.error(deleteEmeraldApiRes?.message?.message);
      }
    }
  };

  const handleCancelChitti: any = async (name: any) => {
    if (window?.location?.pathname === '/chitti') {
      let updateDocStatus: any = await UpdateDocStatusChallanApi(
        accessToken?.token,
        '2',
        name
      );

      if (
        updateDocStatus?.status === 200 &&
        Object.keys(updateDocStatus?.data)?.length > 0
      ) {
        dispatch(getChittiChallan(accessToken?.token));
      }
    } else if (window?.location?.pathname === '/emeraldchitti') {
      let updateDocStatus: any = await UpdateDocStatusEmeraldChittiApi(
        accessToken?.token,
        '2',
        name
      );
      if (
        updateDocStatus?.status === 200 &&
        Object.keys(updateDocStatus?.data)?.length > 0
      ) {
        dispatch(getEmeraldChallan(accessToken?.token));
      }
    }
  };

  const handlePrint = async (name: any) => {
    if (window?.location?.pathname === '/chitti') {
      let printApiRes: any = await PrintChallanChittiApi(
        accessToken?.token,
        name
      );
      if (printApiRes?.status === 'success') {
        if (printApiRes?.data?.data?.length > 0) {
          window.open(printApiRes?.data?.data[0]?.print_url);
        }
      }
    } else if (window?.location?.pathname === '/emeraldchitti') {
      let printApiRes: any = await PrintEmeraldChittiApi(
        accessToken?.token,
        name
      );
      if (printApiRes?.status === 'success') {
        if (printApiRes?.data?.data?.length > 0) {
          window.open(printApiRes?.data?.data[0]?.print_url);
        }
      }
    }
  };

  const TableHeading: any = () => {
    return (
      <>
        {headingData?.length > 0 &&
          headingData !== null &&
          headingData.map((heading: any, index: any) => {
            console.log('heading name', heading);

            if (heading === 'docstatus') {
              return (
                <th className="text-uppercase " key={index} scope="col">
                  Status
                </th>
              );
            }
            if (heading !== 'name') {
              return (
                <th className="text-uppercase" key={index} scope="col">
                  {heading?.replace('_', ' ')}
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
                              <a
                                onClick={() =>
                                  handleSubmitChittiData(data.name)
                                }
                                className="button-section-text text-danger "
                              >
                                Submit
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
                              {data?.date ===
                                new Date()?.toISOString()?.split('T')[0] && (
                                <NavLink
                                  to={`${data.name}`}
                                  className="button-section-text text-info "
                                >
                                  Amend
                                </NavLink>
                              )}
                            </div>

                            <div className="col-lg-4 col-md-4 col-12">
                              <a
                                onClick={() => handleDeleteChitti(data.name)}
                                className="button-section-text text-danger "
                              >
                                Delete
                              </a>
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
    </>
  );
};

export default ListingTable;
