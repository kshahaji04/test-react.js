import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const EmeraldShilpiListing = ({ emeraldShilpiListData }: any) => {
  console.log('emeraldShilpiListData', emeraldShilpiListData);
  return (
    <div className="container">
      <table className="table table table-striped table-hover listing-table border-0">
        <thead className="table-heading">
          <tr className="table-heading-row">
            <th className="w-25 text-start" scope="col">
              Emerald Shilpi list
            </th>
          </tr>
        </thead>
        <tbody>
          {emeraldShilpiListData?.length > 0 &&
            emeraldShilpiListData !== null && (
              <>
                {emeraldShilpiListData.map((data: any, index: any) => {
                  return (
                    <tr className="text-start" key={index}>
                      <td className="border-0">
                        {' '}
                        <NavLink
                          to={`emerald-shilpi/${data.name}`}
                          className="text-decoration-none text-dark"
                        >
                          {data.name}
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default EmeraldShilpiListing;
