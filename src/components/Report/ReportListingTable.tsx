import Loader from '../General/Loader';

const ReportListingTable = ({ reportData }: any) => {
  const headers =
    reportData.length > 0 && reportData[0] ? Object.keys(reportData[0]) : [];

  return (
    <div className="row justify-content-center">
      {reportData?.length > 0 ? (
        <div className={`col table-responsie m-auto report-table-container`}>
          <table className="table table-hover table-striped cursor ">
            <thead className="sticky-top report-table-head-row">
              <tr className="row justify-content-center">
                <th scope="col" className="thead col-1 total_row_container">
                  Sr. No.
                </th>
                {headers?.map((header: string, index: number) => (
                  <th
                    key={index}
                    scope="col"
                    className={`thead total_row_container ${
                      headers?.length <= 4 ? 'col' : 'col'
                    }`}
                  >
                    {header?.charAt(0)?.toUpperCase() +
                      header?.slice(1)?.replace('_', ' ')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reportData
                .slice(0, -1) // Excludes the last row
                .map((data: any, index: any) => {
                  const firstKey = Object.keys(data)[0];
                  const isTotalRow = data[firstKey] === 'Total';
                  return (
                    <tr
                      key={index}
                      className={`row row-cols-7 justify-content-center text-center ${
                        isTotalRow ? 'fw-bold bg-warning ' : ''
                      }`}
                    >
                      <td scope="col" className="col-1 table_row py-1 py-auto">
                        {!isTotalRow && index + 1}
                      </td>
                      {headers.map((header: any, idx: any) => (
                        <td
                          key={idx}
                          scope="col"
                          className={`table_row py-1 py-auto ${
                            headers?.length <= 4 ? 'col' : 'col'
                          }`}
                        >
                          {data[header]}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              {/* Render the last row separately */}
            </tbody>
          </table>
          {reportData.length > 0 && (
            <div className={`sticky-bottom report-total-row-at-bottom`}>
              <table className={`table table-hover table-striped cursor`}>
                <tbody>
                  <tr className="row justify-content-center text-center fw-bold ">
                    <td
                      scope="col"
                      className="col-1 table_row py-1 py-auto"
                    ></td>
                    {headers.map((header: any, idx: any) => (
                      <td
                        key={idx}
                        scope="col"
                        className={`table_row py-2 py-auto total_row_container ${
                          headers?.length <= 4 ? 'col' : 'col'
                        }`}
                      >
                        {reportData[reportData.length - 1][header]}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ReportListingTable;
