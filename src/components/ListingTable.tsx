import React, { useEffect, useState } from 'react';
import EditChittiChallan from './Modal/EditChittiChallan';

const ListingTable = ({ tableListingData }: any) => {
  console.log('tableListingData', tableListingData);
  const [showEditModal, setshowEditModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<any>('');
  const handleEditModal: any = (data: any) => {
    setshowEditModal(!showEditModal);
    setModalData(data);
  };

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
        {headingData?.length > 0 &&
          headingData !== null &&
          headingData.map((heading: any, index: any) => {
            console.log('headingData', heading.replace('_', ' '));
            return (
              <>
                <th className="text-uppercase" key={index} scope="col">
                  {heading?.replace('_', ' ')}
                </th>
              </>
            );
          })}
      </>
    );
  };

  const HandleRenderingData: any = (data: any) => {
    if (data.docstatus === 0) {
      return data.docstatus === 'draft';
    } else if (data.docstatus === 1) {
      return data.docstatus === 'draft';
    } else {
      return data.docstatus === 'draft';
    }
  };

  const TableBodyData: any = () => {
    return (
      <>
        {tableListingData?.length > 0 && tableListingData !== null ? (
          <>
            {tableListingData.map((data: any, i: any) => {
              // {
              //   HandleRenderingData(data);
              // }

              return (
                <tr className="table-body-row" key={i}>
                  {headingData?.length > 0 &&
                    headingData !== null &&
                    headingData.map((v: any) => {
                      return (
                        <td className="border-0" key={v}>
                          {data[v]}
                        </td>
                      );
                    })}

                  {data.docstatus === 0 && (
                    <>
                      <td className="button-section-td border-0">
                        {/* <button
                          onClick={() => handleEditModal(data)}
                          className="btn btn-outline-primary px-lg-2 py-0"
                        > */}
                        <span
                          onClick={() => handleEditModal(data)}
                          className="button-section-text text-info"
                        >
                          Edit
                        </span>
                        {/* </button> */}
                        {/* <button className="btn btn-outline-danger px-lg-2 py-0 mx-2"> */}
                        <span className="button-section-text text-danger mx-3 ">
                          Delete
                        </span>
                        {/* </button> */}
                      </td>
                    </>
                  )}
                  {data.docstatus === 1 && (
                    <>
                      <td className="button-section-td border-0">
                        {/* <button className="btn btn-outline-primary px-lg-2 py-0 "> */}
                        <span className="button-section-text text-primary">
                          print
                        </span>
                        {/* </button> */}
                        {/* <button className="btn btn-outline-danger px-lg-2 py-0 mx-2"> */}
                        <span className="button-section-text text-danger mx-3">
                          Cancel
                        </span>
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
          ''
        )}
      </div>

      {showEditModal ? (
        <EditChittiChallan
          show={showEditModal}
          toHide={handleEditModal}
          modalData={modalData}
        />
      ) : null}
    </>
  );
};

export default ListingTable;
