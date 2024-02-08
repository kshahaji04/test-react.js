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
      <div className="container border mt-2 ">

        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row row mx-0">
              <th scope='col' className='col-lg-2 d-flex justify-content-center'>Sr No.</th>
              <th scope='col' className='col-lg-5'>SubCategory </th>
              <th scope='col' className='col-lg-5'>Category</th>

            </tr>
          </thead>
          <tbody>
            {filteredList?.length > 0 &&
              filteredList !== null &&
              filteredList
                .slice(0, tableViewData)
                .map((group: any, index: any) => (
                  <tr className="text-start table-body-row row mx-0" key={index}>
                    <td className='col-2 text-center p-1'>
                      {index + 1}
                    </td>
                    <td className="col-5 p-1">
                      <NavLink
                        to={`${group.name}`}
                        className="text-decoration-none text-dark"
                      >
                        {group.name}
                      </NavLink>
                    </td>
                    <td className="col-5 p-1">
                      <NavLink
                        to={`${group.name}`}
                        className="text-decoration-none text-dark"
                      >
                        {group.category}
                      </NavLink>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      {filteredList?.length > 19 && filteredList !== null && (
        <LoadMoreTableDataInMaster
          HandleTableViewRows={HandleTableViewRows}
        />
      )}

    </>
  );
};

export default SubCategoryListing;
