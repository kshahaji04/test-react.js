import React from 'react';
import UseSubCategoryReportHook from '../../../hooks/report/subCategory-report-hook';

const SubCategoryReport = () => {
  const { subCategoryReportData }: any = UseSubCategoryReportHook();
  console.log('SubcategoryReport data', subCategoryReportData);
  return (
    <div className="container">
      <div className="mb-1">
        <h5>Sub Category Report</h5>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="report-table-head-row">
            <tr className="report-table-head-tr text-uppercase">
              <th scope="col">Client Name</th>
              <th scope="col">Category</th>
              <th scope="col">Sub Category</th>
              <th scope="col">Gross Weight</th>
              <th scope="col">Net Weight</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {subCategoryReportData?.length > 0 &&
            subCategoryReportData !== null ? (
              <>
                {subCategoryReportData.map((data: any, index: any) => {
                  return (
                    <tr className="report-table-row" key={index}>
                      <td>{data.client_name}</td>
                      <td>{data.category}</td>
                      <td>{data.sub_category}</td>
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

export default SubCategoryReport;
