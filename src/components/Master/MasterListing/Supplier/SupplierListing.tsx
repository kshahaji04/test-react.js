import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const SupplierListing = ({ listingData }: any) => {
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
                <th scope="col-lg-6">Supplier Name</th>
              </div>
              <div className="col-lg-6 col-6">
                {' '}
                <th scope="col-lg-6">Supplier Group</th>
              </div>
            </tr>
          </thead>
          <tbody>
            {listingData?.length > 0 &&
              listingData !== null &&
              listingData
                .slice(0, tableViewData)
                .map((group: any, index: any) => (
                  <tr className="text-start table-body-row row" key={index}>
                    <td className="col-lg-6 col-6 p-1">
                      <NavLink
                        // to={`${group.name}`}
                        to={''}
                        className="text-decoration-none text-dark"
                      >
                        {group.name}
                      </NavLink>
                    </td>
                    <td className="col-lg-6 col-6 p-1">
                      <NavLink
                        // to={`${group.name}`}
                        to={''}
                        className="text-decoration-none text-dark"
                      >
                        {group.supplier_group}
                      </NavLink>
                    </td>
                  </tr>
                ))}

            {listingData?.length > 10 && listingData !== null && (
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

export default SupplierListing;
