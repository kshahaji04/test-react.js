import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const ClientGroupListing = ({ clientGroupList }: any) => {
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
  return (
    <div className="container border mt-2">
      <table className="table table-striped mt-2">
        <thead>
          <tr className="text-start table-heading table-heading-row">
            <th scope="col ">Client Group</th>
          </tr>
        </thead>
        <tbody>
          {clientGroupList?.length > 0 &&
            clientGroupList !== null &&
            clientGroupList
              .slice(0, tableViewData)
              .map((group: any, index: any) => {
                return (
                  <tr className="text-start table-body-row" key={index}>
                    <td className="p-1">
                      <NavLink
                        to={group}
                        className="text-decoration-none text-dark"
                      >
                        {group}
                      </NavLink>
                    </td>
                  </tr>
                );
              })}

          {clientGroupList?.length > 20 && clientGroupList !== null && (
            <LoadMoreTableDataInMaster
              HandleTableViewRows={HandleTableViewRows}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ClientGroupListing;
