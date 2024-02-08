import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const ClientNameListing = ({ clientNameClientGroupList }: any) => {
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
  return (
    <>
      {clientNameClientGroupList?.length > 0 && (
        <div className="text-end pe-3 text-gray">
          {clientNameClientGroupList?.slice(0, tableViewData)?.length} of{' '}
          {clientNameClientGroupList?.length < 10
            ? '0' + clientNameClientGroupList?.length
            : clientNameClientGroupList?.length}
        </div>
      )}
      <div className="container border mt-2 ">
        <table className="table table-striped mt-2 ">
          <thead>
            <tr className="text-start table-heading table-heading-row row px-0 mx-0 ">
              <th scope='col' className='col-lg-1 d-flex justify-content-center'>Sr No.</th>
              <th scope='col' className='col-lg-6'>Client Name</th>
              <th scope='col' className='col-lg-5'>Client Group</th>

            </tr>
          </thead>
          <tbody>
            {clientNameClientGroupList?.length > 0 &&
              clientNameClientGroupList !== null &&
              clientNameClientGroupList
                .slice(0, tableViewData)
                .map((group: any, index: any) => (
                  <tr className="text-start table-body-row row mx-0" key={index}>
                    <td className='col-1 text-center p-1'>
                      {index + 1}
                    </td>
                    <td className="col-lg-6 col-6 p-1 ">
                      <NavLink
                        to={`${group.name}`}
                        className="text-decoration-none text-dark"
                      >
                        {group.name}
                      </NavLink>
                    </td>
                    <td className="col-lg-5 col-5 p-1 ">
                      <NavLink
                        to={`${group.name}`}
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
      {clientNameClientGroupList?.length > 19 &&
        clientNameClientGroupList !== null && (
          <LoadMoreTableDataInMaster
            HandleTableViewRows={HandleTableViewRows}
          />
        )}
    </>
  );
};

export default ClientNameListing;
