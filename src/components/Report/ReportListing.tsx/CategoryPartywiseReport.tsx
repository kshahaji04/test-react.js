import React, { useState } from 'react';
import UseCategoryPartywiseReportHook from '../../../hooks/report/category-partywise-hook';
import FilterReportListing from './FilterReportListing';
import UseClientNameHook from '../../../hooks/Master/client-name-hook';
import UseCategoryHook from '../../../hooks/Master/category-hook';

const CategoryPartyWiseReport = () => {
  const { categoryPartywiseReportData }: any = UseCategoryPartywiseReportHook();
  const { clientNameList }: any = UseClientNameHook();
  const { CategoryList }: any = UseCategoryHook();
  console.log(
    'categoryPartywiseReportData in tsx',
    categoryPartywiseReportData
  );

  const [searchClientName, setSearchclientName] = useState<any>('');
  const [searchCategory, setSearchCategory] = useState<any>('');
  return (
    <div className="container">
      <div className="mb-1">
        <h5>Category Partywise Report</h5>
      </div>
      {/* <FilterReportListing
        clientNameList={clientNameList}
        searchClientName={searchClientName}
        setSearchclientName={setSearchclientName}
        CategoryList={CategoryList}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
      /> */}
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="report-table-head-row">
            <tr className="report-table-head-tr text-uppercase">
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
