import React, { useEffect, useState } from 'react';
// import { TableListingData } from "../datasets/TableListingData";

const ListingTable = ({ tableListingData }: any) => {
  console.log('tableListingData', tableListingData);

  const [headingData, setHeadingData] = useState<any>('');
  // let column: any;
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

  const HandleRenderingData = (data: any) => {
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
            {tableListingData.map((data: any) => {
              console.log('tabledataaa', data);
              {
                HandleRenderingData(data);
              }

              return (
                <tr className="table-body-row" key={data}>
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
                        <button className="btn btn-primary px-lg-2 py-0">
                          <span className="button-section-text">Edit</span>
                        </button>
                        <button className="btn btn-danger px-lg-2 py-0 mx-2">
                          <span className="button-section-text">Delete</span>
                        </button>
                      </td>
                    </>
                  )}
                  {data.docstatus === 1 && (
                    <>
                      <td className="button-section-td border-0">
                        <button className="btn btn-primary px-lg-2 py-0 ">
                          <span className="button-section-text">print</span>
                        </button>
                        <button className="btn btn-danger px-lg-2 py-0 mx-2">
                          <span className="button-section-text">Cancel</span>
                        </button>
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
  );
};

export default ListingTable;
