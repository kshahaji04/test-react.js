import NoRecord from '../../NoRecord';

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
                <th scope="col">Date</th>
                <th scope="col">Sub Category</th>
                <th scope="col">Client Name</th>
                <th scope="col">Gross Weight</th>
                <th scope="col">Net Weight</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {reportData.slice(0, -1).map((data: any, index: any) => {
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
                    <td>{data.date}</td>
                    <td className={`${textColor} subcategory-title`}>
                      {data.sub_category}
                    </td>
                    <td>{data.client_name}</td>
                    <td>{data.gross_weight?.toFixed(3)}</td>
                    <td>{data.net_weight?.toFixed(3)}</td>
                    <td>{data.amount?.toFixed(2)}</td>
                  </tr>
                );
              })}
              <tr className='sticky-bottom report-total-row-at-bottom text-light'>
                <td></td>
                <td>{reportData[reportData.length - 1].date}</td>
                <td>{reportData[reportData.length - 1].client_name}</td>
                <td>{reportData[reportData.length - 1].sub_category}</td>
                <td>{reportData[reportData.length - 1].gross_weight?.toFixed(3)}</td>
                <td>{reportData[reportData.length - 1].net_weight?.toFixed(3)}</td>
                <td>{reportData[reportData.length - 1].amount?.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <NoRecord />
      )
      }
    </div >
  );
};

export default ChittiSubCategoryReportListing;
