import { NavLink } from 'react-router-dom';

const EmeraldSupplierList = ({ supplierList, emeraldSupplierData }: any) => {
  console.log('emeraldTableData', supplierList);
  console.log('emeraldSupplierData', emeraldSupplierData);
  return (
    <>
      <div className="container">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                {/* <th scope="col">Sr no</th> */}
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
                          // to="ESU-13-10-23-00016"
                          className="text-decoration-none text-dark"
                        >
                          {data.naming_series}
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

      {/* <div className="container border mt-2">
      
        <table className="table table-striped table-hover  emerald-supplier-table mt-2">
          <tbody>
            {emeraldSupplierData?.length > 0 &&
              emeraldSupplierData !== null &&
              emeraldSupplierData.map((value: any, index: any) => (
                <NavLink
                  to={`${value?.supplier}`}
                  className="text-decoration-none text-dark"
                >
                  <tr
                    className="text-start table-body-row border-secondary d-flex justify-content-around p-1 "
                    key={index}
                  >
                    <td className="">{value?.naming_series}</td>
                    <td className="">{value?.supplier}</td>
                    <td className="">{value?.date}</td>
                    <td className="text-center">{value?.total_no_of_rows}</td>
                    <td className="text-center">{value?.total_of_grosswt}</td>
                    <td className="text-center">{value?.total_of_netwt}</td>
                  </tr>
                </NavLink>
              ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
};

export default EmeraldSupplierList;
