import { useRef, useState } from 'react';
import UseCategoryPartywiseReportHook from '../../../hooks/report/category-partywise-hook';
import FilterReportListing from './FilterReportListing';
import UseClientNameHook from '../../../hooks/Master/client-name-hook';
import UseCategoryHook from '../../../hooks/Master/category-hook';

const CategoryPartyWiseReport = () => {
  const { categoryPartywiseReportData }: any = UseCategoryPartywiseReportHook();
  console.log("categoryPartywiseReportData in tssx",categoryPartywiseReportData)
  const { clientNameList }: any = UseClientNameHook();
  const { CategoryList }: any = UseCategoryHook();
  // let lastSubCategoryColor: any = 'text-dark';
  const [searchInputValues, setSearchInputValues] = useState({
    fromDate: '',
    toDate: '',
  });

  const showClientNameInFilter = useRef(true);
  const showCategoryInFilter = useRef(true);
  const showDateInFilter = useRef(true);

  const [searchClientName, setSearchclientName] = useState<any>('');
  const [searchCategory, setSearchCategory] = useState<any>('');

  const HandleSearchInput: any = (e: any) => {
    const { name, value } = e.target;
    setSearchInputValues({
      ...searchInputValues,
      [name]: value,
    });
  };

  const filteredList =
    categoryPartywiseReportData?.length > 0 &&
    categoryPartywiseReportData !== null &&
    (searchInputValues.fromDate ||
      searchInputValues.toDate ||
      searchClientName ||
      searchCategory)
      ? categoryPartywiseReportData.filter((item: any) => {
          const categoryMatch = searchCategory
            ? item?.category?.includes(searchCategory)
            : true;
          const clientNameMatch = searchClientName
            ? item?.client_name?.includes(searchClientName)
            : true;

          const dateMatch =
            searchInputValues.fromDate && searchInputValues.toDate
              ? item?.date >= searchInputValues.fromDate &&
                item?.date <= searchInputValues.toDate
              : true;

          return categoryMatch && clientNameMatch && dateMatch;
        })
      : categoryPartywiseReportData;

  return (
    <div className="container">
      <div className="mb-1">
        <h5>Category Partywise Report</h5>
      </div>
      <FilterReportListing
        clientNameList={clientNameList}
        searchClientName={searchClientName}
        setSearchclientName={setSearchclientName}
        CategoryList={CategoryList}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        HandleSearchInput={HandleSearchInput}
        showCategoryInFilter={showCategoryInFilter}
        showClientNameInFilter={showClientNameInFilter}
        showDateInFilter={showDateInFilter}
      />
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="report-table-head-row ">
            <tr className="report-table-head-tr text-uppercase">
              <th scope="col">No</th>
              <th scope="col">Category</th>
              <th scope="col">Client Name</th>
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
                      <td>{data.client_name}</td>
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
