import React, { useEffect, useState } from 'react';
import EditChittiChallan from './Modal/EditChittiChallan';
import { NavLink, useParams } from 'react-router-dom';
import DeleteChallanChittiApi from '../services/api/Chitti/delete-challan-chitti-api';
import { get_access_token } from '../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { getChittiChallan } from '../store/slices/Chitti/get-chitti-challan-list-slice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import DeleteEmeraldChittiApi from '../services/api/Emerald/delete-emerald-chitti-api';
import { getEmeraldChallan } from '../store/slices/Emerald/get-emerald-list-slice';
import UpdateDocStatus from '../services/api/general/update-doc-status-api';
import PrintApi from '../services/api/general/print-api';

const ListingTable = ({
  tableListingData,
  setTableData,
  subCategoryList,
  narrationTableData,
  setNarrationTableData,
  productList,
  selectedDropdownValue,
  drowpdownlist,
}: any) => {
  console.log('tableListingData', tableListingData);
  const dispatch = useDispatch();
  const AccessToken: any = useSelector(get_access_token);

  console.log('idd', window.location);
  const [headingData, setHeadingData] = useState<any>('');

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
    } else if (window?.location?.pathname === '/emerald') {
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
      let updateDocStatus: any = await UpdateDocStatus(
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
    } else if (window?.location?.pathname === '/emerald') {
      let updateDocStatus: any = await UpdateDocStatus(
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
    let printApiRes: any = await PrintApi(AccessToken?.token, name);
    if (printApiRes?.status === 'success') {
      if (printApiRes?.data?.data?.length > 0) {
        window.open(printApiRes?.data?.data[0]?.print_url);
      }
    }
  };

  const TableHeading: any = () => {
    return (
      <>
        <th className="text-uppercase" scope="col">
          Sr No
        </th>
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
            {tableListingData.map((data: any, i: any) => {
              return (
                <tr className="table-body-row" key={i}>
                  <td className="border-0">{i + 1}</td>
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
          'no data'
        )}
      </>
    );
  };

  return (
    <>
      <div className="container">
        {tableListingData?.length > 0 && tableListingData !== null ? (
          <table className="table table table-striped table-hover listing-table border-0">
            <thead className="table-heading">
              <tr className="table-heading-row">
                {TableHeading()}
                <th className="w-25" scope="col"></th>
              </tr>
            </thead>
            <tbody>{TableBodyData()}</tbody>
          </table>
        ) : (
          <div className="text-center my-5">
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>

      {/* {showEditModal ? (
        <EditChittiChallan
          show={showEditModal}
          toHide={handleEditModal}
          modalData={modalData}
          setTableData={setTableData}
          subCategoryList={subCategoryList}
          narrationTableData={narrationTableData}
          setNarrationTableData={setNarrationTableData}
          productList={productList}
          selectedDropdownValue={selectedDropdownValue}
          drowpdownlist={drowpdownlist}
        />
      ) : null} */}
    </>
  );
};

export default ListingTable;
