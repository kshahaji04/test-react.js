import { useRef, useState } from 'react';
import UseCategorySummaryReportHook from '../../../hooks/report/category-summary-report-hook';
import FilterReportListing from './FilterReportListing';
import UseCategoryHook from '../../../hooks/Master/category-hook';

const CategorySummaryReport = () => {
  const { categorySummaryReportData }: any = UseCategorySummaryReportHook();
  const { CategoryList }: any = UseCategoryHook();
  console.log('categorySummaryReportData in tsx', categorySummaryReportData);

  const [searchInputValues, setSearchInputValues] = useState({
    fromDate: '',
    toDate: '',
  });

  const showCategoryInFilter = useRef(true);
  const showDateInFilter = useRef(true);

  const [searchCategory, setSearchCategory] = useState<any>('');

  const HandleSearchInput: any = (e: any) => {
    const { name, value } = e.target;
    setSearchInputValues({
      ...searchInputValues,
      [name]: value,
    });
  };

  const filteredList =
    categorySummaryReportData?.length > 0 &&
    categorySummaryReportData !== null &&
    (searchInputValues.fromDate || searchInputValues.toDate || searchCategory)
      ? categorySummaryReportData.filter((item: any) => {
          const categoryMatch = searchCategory
            ? item?.category?.includes(searchCategory)
            : true;

          const dateMatch =
            searchInputValues.fromDate && searchInputValues.toDate
              ? item?.date >= searchInputValues.fromDate &&
                item?.date <= searchInputValues.toDate
              : true;

          return categoryMatch && dateMatch;
        })
      : categorySummaryReportData;

  return (
    <div className="container">
      <div className="mb-1">
        <h5>Category Summary Report</h5>
      </div>
      <FilterReportListing
        CategoryList={CategoryList}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        HandleSearchInput={HandleSearchInput}
        showCategoryInFilter={showCategoryInFilter}
        showDateInFilter={showDateInFilter}
      />
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="report-table-head-row ">
            <tr className="report-table-head-tr text-uppercase">
              <th scope="col">No</th>
              <th scope="col">Category</th>
              <th scope="col">Gross Weight</th>
              <th scope="col">Net Weight</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredList?.length > 0 && filteredList !== null ? (
              <>
                {filteredList.map((data: any, index: any) => {
                  return (
                    <tr className="report-table-row" key={index}>
                      <td>{index + 1}</td>
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
