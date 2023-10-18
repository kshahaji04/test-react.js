import { useRef, useState } from 'react';
import UseSubCategoryReportHook from '../../../hooks/report/subCategory-report-hook';
import FilterReportListing from './FilterReportListing';
import UseClientNameHook from '../../../hooks/Master/client-name-hook';
import UseCategoryHook from '../../../hooks/Master/category-hook';
import UseSubCategoryHook from '../../../hooks/Master/sub-category-hook';

const SubCategoryReport = () => {
  const { subCategoryReportData }: any = UseSubCategoryReportHook();
  const { clientNameList }: any = UseClientNameHook();
  const { CategoryList }: any = UseCategoryHook();
  const { subCategoryList }: any = UseSubCategoryHook();
  console.log('SubcategoryReport data', subCategoryReportData);

  const [searchInputValues, setSearchInputValues] = useState({
    fromDate: '',
    toDate: '',
  });
  let lastSubCategoryColor: any = 'text-dark';

  const showClientNameInFilter = useRef(true);
  const showCategoryInFilter = useRef(true);
  const showDateInFilter = useRef(true);
  const showSubCategoryInFilter = useRef(true);

  const [searchClientName, setSearchclientName] = useState<any>('');
  const [searchCategory, setSearchCategory] = useState<any>('');
  const [searchSubCategory, setSearchSubCategory] = useState<any>('');

  const HandleSearchInput: any = (e: any) => {
    const { name, value } = e.target;
    setSearchInputValues({
      ...searchInputValues,
      [name]: value,
    });
  };

  const filteredList =
    subCategoryReportData?.length > 0 &&
    subCategoryReportData !== null &&
    (searchInputValues.fromDate ||
      searchInputValues.toDate ||
      searchSubCategory ||
      searchClientName ||
      searchCategory)
      ? subCategoryReportData.filter((item: any) => {
          const clientNameMatch = searchClientName
            ? item?.client_name?.includes(searchClientName)
            : true;
          const categoryMatch = searchCategory
            ? item?.category?.includes(searchCategory)
            : true;
          const subCategoryMatch = searchSubCategory
            ? item?.sub_category?.includes(searchSubCategory)
            : true;

          const dateMatch =
            searchInputValues.fromDate && searchInputValues.toDate
              ? item?.date >= searchInputValues.fromDate &&
                item?.date <= searchInputValues.toDate
              : true;

          return (
            categoryMatch && subCategoryMatch && clientNameMatch && dateMatch
          );
        })
      : subCategoryReportData;

  return (
    <div className="container">
      <div className="mb-1">
        <h5>Sub Category Report</h5>
      </div>
      <FilterReportListing
        clientNameList={clientNameList}
        searchClientName={searchClientName}
        setSearchclientName={setSearchclientName}
        CategoryList={CategoryList}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
        searchSubCategory={searchSubCategory}
        setSearchSubCategory={setSearchSubCategory}
        HandleSearchInput={HandleSearchInput}
        showCategoryInFilter={showCategoryInFilter}
        showSubCategoryInFilter={showSubCategoryInFilter}
        showClientNameInFilter={showClientNameInFilter}
        showDateInFilter={showDateInFilter}
        subCategoryList={subCategoryList}
      />
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="report-table-head-row ">
            <tr className="report-table-head-tr text-uppercase">
              <th scope="col">No</th>
              <th scope="col">Sub Category</th>
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
                  const subCategory = data.sub_category;
                  const textColor =
                    subCategory === filteredList[index - 1]?.sub_category
                      ? lastSubCategoryColor
                      : lastSubCategoryColor === 'text-danger'
                      ? 'text-dark'
                      : 'text-danger';
                  lastSubCategoryColor = textColor; // Update the color for the next iteration
                  return (
                    <tr className="report-table-row" key={index}>
                      <td>{index + 1}</td>

                      <td className={`${textColor}`}>{data.sub_category}</td>
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

export default SubCategoryReport;
