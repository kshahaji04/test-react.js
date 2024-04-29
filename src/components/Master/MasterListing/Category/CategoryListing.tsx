import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const CategoryListing = ({ CategoryList }: any) => {
  const [tableViewData, setTableViewData] = useState<any>(20);

  const handleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
  return (
    <>
      <div className="container border mt-2">
        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row">
              <th scope="col ">Category</th>
            </tr>
          </thead>
          <tbody>
            {CategoryList?.length > 0 &&
              CategoryList !== null &&
              CategoryList.slice(0, tableViewData).map(
                (group: any, index: any) => {
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
                }
              )}
          </tbody>
        </table>
      </div>
      {CategoryList?.length > 19 && CategoryList !== null && (
        <LoadMoreTableDataInMaster HandleTableViewRows={handleTableViewRows} />
      )}
    </>
  );
};

export default CategoryListing;
