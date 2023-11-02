import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const ClientNameListing = ({ clientNameClientGroupList }: any) => {
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
  return (
    <div className="container border mt-2 row">
      <div className="">
        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row row">
              <div className="col-lg-6 col-6">
                {' '}
                <th scope="col-lg-6">Client Name</th>
              </div>
              <div className="col-lg-6 col-6">
                {' '}
                <th scope="col-lg-6">Client Group</th>
              </div>
            </tr>
          </thead>
          <tbody>
            {clientNameClientGroupList?.length > 0 &&
              clientNameClientGroupList !== null &&
              clientNameClientGroupList
                .slice(0, tableViewData)
                .map((group: any, index: any) => (
                  <tr className="text-start table-body-row row" key={index}>
                    <td className="col-lg-6 col-6 p-1">
                      <NavLink
                        to={`${group.name}`}
                        className="text-decoration-none text-dark"
                      >
                        {group.name}
                      </NavLink>
                    </td>
                    <td className="col-lg-6 col-6 p-1">
                      <NavLink
                        to={`${group.name}`}
                        className="text-decoration-none text-dark"
                      >
                        {group.client_group}
                      </NavLink>
                    </td>
                  </tr>
                ))}

            {clientNameClientGroupList?.length > 20 &&
              clientNameClientGroupList !== null && (
                <LoadMoreTableDataInMaster
                  HandleTableViewRows={HandleTableViewRows}
                />
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientNameListing;
