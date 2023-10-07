import React, { useEffect, useState } from 'react';
import EditChittiChallan from './Modal/EditChittiChallan';
import { NavLink } from 'react-router-dom';


const ListingTable = ({
  tableListingData,
  setTableData,
  subCategoryList,
  narrationTableData,
  setNarrationTableData,
  productList,
  selectedDropdownValue,
  drowpdownlist
}: any) => {
  console.log('tableListingData', tableListingData);
  const [showEditModal, setshowEditModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>('');
  const handleEditModal: any = (data: any) => {
    setshowEditModal(!showEditModal);
    setModalData(data?.challan_name);
  };

  console.log(window.location.pathname);

  const [headingData, setHeadingData] = useState<any>('');



  useEffect(() => {
    if (Object?.keys(tableListingData)?.length > 0) {
      let column: any = Object?.keys(tableListingData[0]);
      setHeadingData(column);
    }
  }, [tableListingData]);

  console.log('columndata', headingData);

  const TableHeading: any = () => {
    return (
      <>
        <th className="text-uppercase" scope="col">Sr No</th>
        {headingData?.length > 0 &&
          headingData !== null &&
          headingData.map((heading: any, index: any) => {
            console.log('headingData', heading.replace('_', ' '));
            if (heading !== 'ate') { // Exclude 'date' key
              console.log('headingData', heading.replace('_', ' '));
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
              console.log("dataaa", data)

              return (
                <tr className="table-body-row" key={i}>
                  <td className="border-0">{i + 1}</td>
                  {headingData?.length > 0 &&
                    headingData !== null &&
                    headingData.map((v: any, index: any) => {
                      if (v !== 'dte') { // Exclude 'date' key
                        return (
                          <td className="border-0" key={v}>
                            {v !== 'docstatus' ? data[v] :
                              data[v] === 0
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
                          to={`${data.number}`}
                          className="button-section-text text-info"
                        >
                          Edit
                        </NavLink>

                        <NavLink to={`${data.number}`} className="button-section-text text-danger mx-3 ">
                          Delete
                        </NavLink>

                      </td>
                    </>
                  )}
                  {data.docstatus === 1 && (
                    <>
                      <td className="button-section-td border-0">
                        {/* <button className="btn btn-outline-primary px-lg-2 py-0 "> */}
                        <NavLink to={`${data.number}`} className="button-section-text text-primary">
                          print
                        </NavLink>
                        {/* </button> */}
                        {/* <button className="btn btn-outline-danger px-lg-2 py-0 mx-2"> */}
                        <NavLink to={`${data.number}`} className="button-section-text text-danger mx-3">
                          Cancel
                        </NavLink>
                        {/* </button> */}
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
          <div className='text-center my-5'>
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
