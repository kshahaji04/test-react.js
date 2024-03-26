import { NavLink } from 'react-router-dom';
import LoadMoreTableDataInMaster from '../LoadMoreTableDataInMaster';

const SupplierListing = ({
  listingData,
  tableViewData,
  handleTableViewRows,
}: any) => {
  return (
    <>
      <div className="container border mt-2 ">
        <table className="table table-striped mt-2">
          <thead>
            <tr className="text-start table-heading table-heading-row row mx-0 ">
              <th
                scope="col"
                className="col-lg-1 col-2 d-flex justify-content-center"
              >
                Sr No.
              </th>
              <th scope="col" className="col-lg-6 col-5">
                Supplier Name{' '}
              </th>
              <th scope="col" className="col-lg-5 col-5">
                Supplier Group
              </th>
            </tr>
          </thead>
          <tbody>
            {listingData?.length > 0 &&
              listingData !== null &&
              listingData
                .slice(0, tableViewData)
                .map((group: any, index: any) => (
                  <tr
                    className="text-start table-body-row row mx-0"
                    key={index}
                  >
                    <td className="col-lg-1 col-2 text-center p-0">
                      {index + 1}
                    </td>
                    <td className="col-lg-6 col-5 p-1">
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
        <LoadMoreTableDataInMaster handleTableViewRows={handleTableViewRows} />
      )}
    </>
  );
};

export default SupplierListing;
