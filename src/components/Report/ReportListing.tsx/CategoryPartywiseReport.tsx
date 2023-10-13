import React from 'react';
import UseCategoryPartywiseReportHook from '../../../hooks/report/category-partywise-hook';

const CategoryPartyWiseReport = () => {
  const { categoryPartywiseReportData }: any = UseCategoryPartywiseReportHook();
  console.log(
    'categoryPartywiseReportData in tsx',
    categoryPartywiseReportData
  );
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              {/* <th scope="col">Sr no</th> */}
              <th scope="col">Client Name</th>
              <th scope="col">Category</th>
              <th scope="col">Gross Weight</th>
              <th scope="col">Net Weight</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {categoryPartywiseReportData?.length > 0 &&
            categoryPartywiseReportData !== null ? (
              <>
                {categoryPartywiseReportData.map((data: any, index: any) => {
                  return (
                    <tr className="report-table-row" key={index}>
                      {/* <th scope="row">{index + 1}</th> */}
                      <td>{data.client_name}</td>
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

export default CategoryPartyWiseReport;
