import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const SubCategoryListing = ({ filteredList }: any) => {
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };

  return (
    <>
      {filteredList?.length > 0 && (
        <div className="text-end pe-3 text-gray">
          {filteredList?.slice(0, tableViewData)?.length} of{' '}
          {filteredList?.length < 10
            ? '0' + filteredList?.length
            : filteredList?.length}
        </div>
      )}
      <div className="container border my-2 row">
        <div className="table-responsive">
          <table className="table table-striped mt-2">
            <thead>
              <tr className="text-start table-heading table-heading-row row">
                <div className="col-lg-6 col-6">
                  <th scope="col-lg-6">SubCategory </th>
                </div>
                <div className="col-lg-6 col-6">
                  <th scope="col-lg-6">Category</th>
                </div>
              </tr>
            </thead>
            <tbody>
              {filteredList?.length > 0 &&
                filteredList !== null &&
                filteredList
                  .slice(0, tableViewData)
                  .map((group: any, index: any) => (
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
                          to={`${group.name}`}
                          className="text-decoration-none text-dark"
                        >
                          {group.category}
                        </NavLink>
                      </td>
                    </tr>
                  ))}
              {filteredList?.length > 20 && filteredList !== null && (
                <LoadMoreTableDataInMaster
                  HandleTableViewRows={HandleTableViewRows}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SubCategoryListing;
