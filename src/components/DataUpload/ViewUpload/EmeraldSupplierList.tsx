import { NavLink } from 'react-router-dom';

const EmeraldSupplierList = ({ supplierList, emeraldSupplierData }: any) => {
  console.log('emeraldTableData', supplierList);
  console.log('emeraldSupplierData', emeraldSupplierData);
  return (
    <>
      <div className="container mt-3">
        {/* <div className="mb-1">
          <h5>Emerald Shilpi List</h5>
        </div> */}
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="report-table-head-row">
              <tr className="report-table-head-tr text-uppercase">
                <th scope="col">Id</th>
                <th scope="col">Supplier</th>
                <th scope="col">Date</th>
                <th scope="col">Total No of Rows</th>
                <th scope="col">Total of Grosswt</th>
                <th scope="col">Total of Netwt</th>
              </tr>
            </thead>
            <tbody>
              {emeraldSupplierData?.length > 0 &&
              emeraldSupplierData !== null ? (
                <>
                  {emeraldSupplierData.map((data: any, index: any) => (
                    <tr key={index} className="report-table-row">
                      <td>
                        <NavLink
                          to={`${data.name}`}
                          className="text-decoration-none text-dark"
                        >
                          {data.name}
                        </NavLink>
                      </td>
                      <td>
                        <NavLink
                          to={`${data.name}`}
                          className="text-decoration-none text-dark"
                        >
                          {data.supplier}{' '}
                        </NavLink>
                      </td>
                      <td>
                        <NavLink
                          to={`${data.name}`}
                          className="text-decoration-none text-dark"
                        >
                          {data.date}
                        </NavLink>
                      </td>
                      <td>
                        <NavLink
                          to={`${data.name}`}
                          className="text-decoration-none text-dark"
                        >
                          {data.total_no_of_rows}
                        </NavLink>
                      </td>
                      <td>
                        <NavLink
                          to={`${data.name}`}
                          className="text-decoration-none text-dark"
                        >
                          {data.total_of_grosswt}
                        </NavLink>
                      </td>
                      <td>
                        <NavLink
                          to={`${data.name}`}
                          className="text-decoration-none text-dark"
                        >
                          {data.total_of_netwt}
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                ''
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmeraldSupplierList;
