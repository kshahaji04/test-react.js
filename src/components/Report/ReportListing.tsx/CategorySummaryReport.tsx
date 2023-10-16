import React from 'react';
import UseCategorySummaryReportHook from '../../../hooks/report/category-summary-report-hook';

const CategorySummaryReport = () => {
  const { categorySummaryReportData }: any = UseCategorySummaryReportHook();
  console.log('categorySummaryReportData in tsx', categorySummaryReportData);
  return (
    <div className="container">
      <div className="mb-1">
        <h5>Category Summary Report</h5>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="report-table-head-row">
            <tr className="report-table-head-tr text-uppercase">
              <th scope="col">Category</th>
              <th scope="col">Gross Weight</th>
              <th scope="col">Net Weight</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {categorySummaryReportData?.length > 0 &&
            categorySummaryReportData !== null ? (
              <>
                {categorySummaryReportData.map((data: any, index: any) => {
                  return (
                    <tr className="report-table-row" key={index}>
                      <td>{data.category}</td>
                      <td>{data.total_gross_weight}</td>
                      <td>{data.total_net_weight}</td>
                      <td>{data.total_amount}</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              ''
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategorySummaryReport;
