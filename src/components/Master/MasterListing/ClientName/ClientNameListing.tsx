import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const ClientNameListing = ({ clientNameList }: any) => {



  return (
    <div className="container border mt-2">
    <table className="table table-striped mt-2">
      <thead>
        <tr className="text-start table-heading table-heading-row">
          <th scope="col">Client Name Listing</th>
        </tr>
      </thead>
      <tbody>
        {clientNameList?.length > 0 &&
          clientNameList !== null &&
          clientNameList.map((group: any, index: any) => (
            <tr className="text-start table-body-row" key={index}>
              <td className="p-1">
                <NavLink to={`${group}`} className="text-decoration-none text-dark">
                  {group}
                </NavLink>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
  );
};

export default ClientNameListing;
