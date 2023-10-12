import React from 'react';
import { NavLink } from 'react-router-dom';

const ClientNameListing = ({ clientNameClientGroupList }: any) => {
  return (
    <div className="container border mt-2 row">
      <div className="">
        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row row">
              <div className="col-lg-6">
                {' '}
                <th scope="col-lg-6">Client Name</th>
              </div>
              <div className="col-lg-6">
                {' '}
                <th scope="col-lg-6">Client Group</th>
              </div>
            </tr>
          </thead>
          <tbody>
            {clientNameClientGroupList?.length > 0 &&
              clientNameClientGroupList !== null &&
              clientNameClientGroupList.map((group: any, index: any) => (
                <tr className="text-start table-body-row row" key={index}>
                  <td className="col-6 p-1">
                    <NavLink
                      to={`${group.name}`}
                      className="text-decoration-none text-dark"
                    >
                      {group.name}
                    </NavLink>
                  </td>
                  <td className="col-6 p-1">
                    <NavLink
                      to={`${group.client_group}`}
                      className="text-decoration-none text-dark"
                    >
                      {group.client_group}
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* <div className="col-lg-6">
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
      </div> */}
    </div>
  );
};

export default ClientNameListing;
