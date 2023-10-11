import React from 'react';
import { NavLink } from 'react-router-dom';

const ClientNameListing = ({
  ClientFilterList,
  ClientGroupFilterList,
}: any) => {
  return (
    <div className="container border mt-2 row">
      <div className="col-lg-6">
        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row">
              <th scope="col">Client Name</th>
            </tr>
          </thead>
          <tbody>
            {ClientFilterList?.length > 0 &&
              ClientFilterList !== null &&
              ClientFilterList.map((group: any, index: any) => (
                <tr className="text-start table-body-row" key={index}>
                  <td className="p-1">
                    <NavLink
                      to={`${group}`}
                      className="text-decoration-none text-dark"
                    >
                      {group}
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="col-lg-6">
        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row">
              <th scope="col">Client Group</th>
            </tr>
          </thead>
          <tbody>
            {ClientGroupFilterList?.length > 0 &&
              ClientGroupFilterList !== null &&
              ClientGroupFilterList.map((group: any, index: any) => (
                <tr className="text-start table-body-row" key={index}>
                  <td className="p-1">
                    <NavLink
                      to={`${group}`}
                      className="text-decoration-none text-dark"
                    >
                      {group}
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientNameListing;
