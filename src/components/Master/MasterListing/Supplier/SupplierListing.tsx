import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const SupplierListing = ({ listingData }: any) => {
  const [tableViewData, setTableViewData] = useState<any>(20);

  const HandleTableViewRows: any = (data: any) => {
    setTableViewData(data);
  };
  return (
    <>
      {listingData?.length > 0 && (
        <div className="text-end pe-3 text-gray">
          {listingData?.slice(0, tableViewData)?.length} of{' '}
          {listingData?.length < 10
            ? '0' + listingData?.length
            : listingData?.length}
        </div>
      )}
      <div className="container border mt-2 ">

        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row row">
              <div className="col-1 d-flex justify-content-center">
                <th >Sr No.</th>
              </div>
              <div className="col-lg-6 col-6 px-0">
                <th >Supplier Name</th>
              </div>
              <div className="col-lg-5 col-5 px-0">
                <th >Supplier Group</th>
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
                    <td className='col-1 text-center p-0'>
                      {index + 1}
                    </td>
                    <td className="col-lg-6 col-6 p-1">
                      <NavLink
                        to={`${group.name}`}

                        className="text-decoration-none text-dark"
                      >
                        {group.name}
                      </NavLink>
                    </td>
                    <td className="col-lg-5 col-5 p-1">
                      <NavLink
                        to={`${group.name}`}

                        className="text-decoration-none text-dark"
                      >
                        {group.supplier_group}
                      </NavLink>
                    </td>
                  </tr>
                ))}

          </tbody>
        </table>
      </div>
      {listingData?.length > 10 && listingData !== null && (
        <LoadMoreTableDataInMaster
          HandleTableViewRows={HandleTableViewRows}
        />
      )}
    </>
  );
};

export default SupplierListing;
