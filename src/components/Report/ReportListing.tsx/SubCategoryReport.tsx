import { useRef, useState } from 'react';
import UseSubCategoryReportHook from '../../../hooks/report/subCategory-report-hook';
import FilterReportListing from './FilterReportListing';
import UseClientNameHook from '../../../hooks/Master/client-name-hook';
import UseCategoryHook from '../../../hooks/Master/category-hook';
import UseSubCategoryHook from '../../../hooks/Master/sub-category-hook';
import ShowTotalAmountOfReportData from './ShowTotalAmountOfReportData';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { getSubCategoryReportData } from '../../../store/slices/report/get-subcategory-report-slice';

const SubCategoryReport = () => {
  const dispatch = useDispatch();
  const { subCategoryReportData }: any = UseSubCategoryReportHook();
  const { clientNameList }: any = UseClientNameHook();
  const { CategoryList }: any = UseCategoryHook();
  const { subCategoryList }: any = UseSubCategoryHook();
  const AccessToken: any = useSelector(get_access_token);

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

  const handleFilterList: any = () => {
    const reqParams: any = {
      token: AccessToken?.token,
      category: searchCategory,
      sub_category: searchSubCategory,
      client_name: searchClientName,
      from_date: searchInputValues?.fromDate,
      to_date: searchInputValues?.toDate,
    };
    if (
      Object?.keys(
        reqParams?.category ||
          reqParams?.sub_category ||
          reqParams?.client_name ||
          reqParams?.from_date ||
          reqParams?.to_date
      )?.length > 0
    ) {
      dispatch(getSubCategoryReportData(reqParams));
    } else {
      toast.error('Search field is empty');
    }
  };

  // const filteredList =
  //   subCategoryReportData?.length > 0 &&
  //   subCategoryReportData !== null &&
  //   (searchInputValues.fromDate ||
  //     searchInputValues.toDate ||
  //     searchSubCategory ||
  //     searchClientName ||
  //     searchCategory)
  //     ? subCategoryReportData.filter((item: any) => {
  //         const clientNameMatch = searchClientName
  //           ? item?.client_name
  //               ?.toLowerCase()
  //               ?.includes(searchClientName?.toLowerCase())
  //           : true;
  //         const categoryMatch = searchCategory
  //           ? item?.category
  //               ?.toLowerCase()
  //               ?.includes(searchCategory?.toLowerCase())
  //           : true;
  //         const subCategoryMatch = searchSubCategory
  //           ? item?.sub_category
  //               ?.toLowerCase()
  //               ?.includes(searchSubCategory?.toLowerCase())
  //           : true;

  //         const dateMatch =
  //           searchInputValues.fromDate && searchInputValues.toDate
  //             ? item?.date >= searchInputValues.fromDate &&
  //               item?.date <= searchInputValues.toDate
  //             : true;

  //         return (
  //           categoryMatch && subCategoryMatch && clientNameMatch && dateMatch
  //         );
  //       })
  //     : subCategoryReportData;

  return (
    <div className="container mb-5">
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
        handleFilterList={handleFilterList}
      />
      <div className="table-responsive report-table-container">
        <table className="table table-striped table-hover">
          <thead className="report-table-head-row sticky-top">
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
            {subCategoryReportData?.length > 0 &&
            subCategoryReportData !== null ? (
              <>
                {subCategoryReportData.map((data: any, index: any) => {
                  const subCategory = data.sub_category;
                  const textColor =
                    subCategory ===
                    subCategoryReportData[index - 1]?.sub_category
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
                      <td>{data.total_gross_weight}</td>
                      <td>{data.total_net_weight}</td>
                      <td>{data.total_amount}</td>
                    </tr>
                  );
                })}
                <ShowTotalAmountOfReportData
                  data={subCategoryReportData}
                  colSpan="3"
                />
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
