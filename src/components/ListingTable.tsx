import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import DeleteChallanChittiApi from '../services/api/Chitti/delete-challan-chitti-api';
import { get_access_token } from '../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { getChittiChallan } from '../store/slices/Chitti/get-chitti-challan-list-slice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import DeleteEmeraldChittiApi from '../services/api/Emerald/delete-emerald-chitti-api';
import { getEmeraldChallan } from '../store/slices/Emerald/get-emerald-list-slice';

import PrintChallanChittiApi from '../services/api/Chitti/print-challan-chitti-api';

import PrintEmeraldChittiApi from '../services/api/Emerald/print-emerald-chitti-api';
import { UpdateDocStatusChallanApi } from '../services/api/general/update-doc-status-challan--api';
import { UpdateDocStatusEmeraldChittiApi } from '../services/api/general/update-doc-status-emrald-chitti-api';

const ListingTable = ({ tableListingData }: any) => {
  console.log('tableListingData', tableListingData);
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  const [headingData, setHeadingData] = useState<any>('');
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };

  useEffect(() => {
    if (Object?.keys(tableListingData)?.length > 0) {
      let column: any = Object?.keys(tableListingData[0]);
      setHeadingData(column);
    }
  }, [tableListingData]);

  const HandleDeleteChitti: any = async (name: any) => {
    if (window?.location?.pathname === '/chitti') {
      let deleteChallanApiRes: any = await DeleteChallanChittiApi(
        AccessToken?.token,
        name
      );

      if (deleteChallanApiRes?.message?.status === 'success') {
        toast.success('Chitti Deleted');
        dispatch(getChittiChallan(AccessToken?.token));
      } else {
        toast.error('Failed to delete chitti');
      }
    } else if (window?.location?.pathname === '/emeraldchitti') {
      let deleteEmeraldApiRes: any = await DeleteEmeraldChittiApi(
        AccessToken?.token,
        name
      );
      console.log('deleteChallanApiRes', deleteEmeraldApiRes);
      if (deleteEmeraldApiRes?.message?.status === 'success') {
        toast.success('Chitti Deleted');
        dispatch(getEmeraldChallan(AccessToken?.token));
      } else {
        toast.error('Failed to delete chitti');
      }
    }
  };

  const HandleCancelChitti: any = async (name: any) => {
    if (window?.location?.pathname === '/chitti') {
      let updateDocStatus: any = await UpdateDocStatusChallanApi(
        AccessToken?.token,
        '2',
        name
      );

      if (
        updateDocStatus?.status === 200 &&
        Object.keys(updateDocStatus?.data)?.length > 0
      ) {
        dispatch(getChittiChallan(AccessToken?.token));
      }
    } else if (window?.location?.pathname === '/emeraldchitti') {
      let updateDocStatus: any = await UpdateDocStatusEmeraldChittiApi(
        AccessToken?.token,
        '2',
        name
      );
      if (
        updateDocStatus?.status === 200 &&
        Object.keys(updateDocStatus?.data)?.length > 0
      ) {
        dispatch(getEmeraldChallan(AccessToken?.token));
      }
    }
  };

  const HandlePrint = async (name: any) => {
    if (window?.location?.pathname === '/chitti') {
      let printApiRes: any = await PrintChallanChittiApi(
        AccessToken?.token,
        name
      );
      if (printApiRes?.status === 'success') {
        if (printApiRes?.data?.data?.length > 0) {
          window.open(printApiRes?.data?.data[0]?.print_url);
        }
      }
    } else if (window?.location?.pathname === '/emeraldchitti') {
      let printApiRes: any = await PrintEmeraldChittiApi(
        AccessToken?.token,
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
        {/* {headingData?.length > 0 && headingData !== null && (
          <th
            className="text-uppercase text-center table-heading-sr-no"
            scope="col"
          >
            Sr No
          </th>
        )} */}

        {headingData?.length > 0 &&
          headingData !== null &&
          headingData.map((heading: any, index: any) => {
            console.log('heading name', heading);
            if (heading === 'docstatus') {
              return (
                <th className="text-uppercase" key={index} scope="col">
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
                    {/* <td className="border-0">{i + 1}</td> */}
                    {headingData?.length > 0 &&
                      headingData !== null &&
                      headingData.map((v: any, index: any) => {
                        if (v !== 'name') {
                          // Exclude 'date' key
                          return (
                            <td className="border-0" key={index}>
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
                        <td className="button-section-td border-0">
                          <NavLink
                            to={`${data.name}`}
                            className="button-section-text text-info"
                          >
                            Edit
                          </NavLink>

                          <a
                            onClick={() => HandleDeleteChitti(data.name)}
                            className="button-section-text text-danger mx-3 "
                          >
                            Delete
                          </a>
                        </td>
                      </>
                    )}
                    {data.docstatus === 1 && (
                      <>
                        <td className="button-section-td border-0">
                          <a
                            onClick={() => HandlePrint(data.name)}
                            className="button-section-text text-primary"
                          >
                            print
                          </a>

                          <a
                            onClick={() => HandleCancelChitti(data.name)}
                            className="button-section-text text-danger mx-3"
                          >
                            Cancel
                          </a>
                        </td>
                      </>
                    )}
                    {data.docstatus === 2 && (
                      <>
                        <td className="button-section-td border-0">
                          <a className="button-section-text text-primary "></a>
                          <a
                            onClick={() => HandleDeleteChitti(data.name)}
                            className="button-section-text text-danger mx-3"
                          >
                            Delete
                          </a>
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
        <table className="table table table-striped table-hover listing-table border-0">
          <thead className="table-heading">
            <tr className="table-heading-row">
              {TableHeading()}
              <th className="w-25" scope="col"></th>
            </tr>
          </thead>
          <tbody>{TableBodyData()}</tbody>
        </table>
        {tableListingData?.length > 20 && tableListingData !== null && (
          <div
            className="btn-group mr-2 my-2 mb-4"
            role="group"
            aria-label="Second group"
          >
            <button
              type="button"
              className="btn btn-primary  py-0"
              onClick={() => HandleTableViewRows(20)}
            >
              20
            </button>
            <button
              type="button"
              className="btn btn-primary  py-0"
              onClick={() => HandleTableViewRows(100)}
            >
              100
            </button>
            <button
              type="button"
              className="btn btn-primary  py-0"
              onClick={() => HandleTableViewRows(500)}
            >
              500
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ListingTable;
