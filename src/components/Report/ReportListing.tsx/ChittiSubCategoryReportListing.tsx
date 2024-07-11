import NoRecord from '../../NoRecord';
import ShowTotalAmountOfReportData from './ShowTotalAmountOfReportData';

const ChittiSubCategoryReportListing = ({ reportData }: any) => {
  let lastSubCategoryColor: any = 'text-dark';
  return (
    <div className="col-lg-12 col-12 mx-auto table-responsive report-table-container">
      {reportData?.length > 0 && reportData !== null ? (
        <>
          <table className="table table-striped table-hover">
            <thead className="report-table-head-row sticky-top">
              <tr className="report-table-head-tr text-uppercase">
                <th scope="col">Sr No.</th>
                <th scope="col">Sub Category</th>
                <th scope="col">Client Name</th>
                <th scope="col">Gross Weight</th>
                <th scope="col">Net Weight</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((data: any, index: any) => {
                const subCategory = data.sub_category;
                const textColor =
                  subCategory === reportData[index - 1]?.sub_category
                    ? lastSubCategoryColor
                    : lastSubCategoryColor === 'text-danger'
                    ? 'text-dark'
                    : 'text-danger';
                lastSubCategoryColor = textColor; // Update the color for the next iteration
                return (
                  <tr className="report-table-row" key={index}>
                    <td>{index + 1}</td>

                    <td className={`${textColor} subcategory-title`}>
                      {data.sub_category}
                    </td>
                    <td>{data.client_name}</td>
                    <td>{data.total_gross_weight?.toFixed(3)}</td>
                    <td>{data.total_net_weight?.toFixed(3)}</td>
                    <td>{data.total_amount?.toFixed(2)}</td>
                  </tr>
                );
              })}
              <ShowTotalAmountOfReportData data={reportData} colSpan="3" />
            </tbody>
          </table>
        </>
      ) : (
        <NoRecord />
      )}
    </div>
  );
};

export default ChittiSubCategoryReportListing;
