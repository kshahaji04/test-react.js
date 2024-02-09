import { useRef, useState, useEffect } from 'react';
import UseSubCategoryReportHook from '../../../hooks/report/subCategory-report-hook';
import FilterReportListing from './FilterReportListing';
import UseClientNameHook from '../../../hooks/Master/client-name-hook';
import UseCategoryHook from '../../../hooks/Master/category-hook';
import UseSubCategoryHook from '../../../hooks/Master/sub-category-hook';
import ShowTotalAmountOfReportData from './ShowTotalAmountOfReportData';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { getSubCategoryReportData } from '../../../store/slices/report/get-subcategory-report-slice';
import DownloadReportApi from '../../../services/api/report/download-report-api';

const SubCategoryReport = () => {
  const dispatch = useDispatch();
  const { subCategoryReportData }: any = UseSubCategoryReportHook();
  const { clientNameList }: any = UseClientNameHook();
  const { CategoryList }: any = UseCategoryHook();
  const { subCategoryList }: any = UseSubCategoryHook();
  const AccessToken: any = useSelector(get_access_token);

  console.log('SubcategoryReport data', subCategoryList);

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

  useEffect(() => {
    const handleFilterList: any = () => {
      const reqParams: any = {
        token: AccessToken?.token,
        category: searchCategory,
        sub_category: searchSubCategory,
        client_name: searchClientName,
        from_date: searchInputValues?.fromDate,
        to_date: searchInputValues?.toDate,
      };

      if ((reqParams?.from_date || reqParams?.to_date)?.length > 0) {
        dispatch(getSubCategoryReportData(reqParams));
      }

      if (
        CategoryList?.length > 0 &&
        CategoryList !== null &&
        CategoryList.find((data: any) => data === searchCategory)
      ) {
        dispatch(getSubCategoryReportData(reqParams));
      }
      if (
        subCategoryList?.length > 0 &&
        subCategoryList !== null &&
        subCategoryList.find((data: any) => data === searchSubCategory)
      ) {
        dispatch(getSubCategoryReportData(reqParams));
      }

      if (
        clientNameList?.length > 0 &&
        clientNameList !== null &&
        clientNameList.find((data: any) => data === searchClientName)
      ) {
        dispatch(getSubCategoryReportData(reqParams));
      }

      const checkNoFilterApply = () => {
        if (
          !reqParams.category &&
          !reqParams.sub_category &&
          !reqParams.client_name &&
          !reqParams.from_date &&
          !reqParams.to_date
        ) {
          return true;
        }
        return false;
      };
      if (checkNoFilterApply()) {
        dispatch(getSubCategoryReportData(reqParams));
      }
    };
    handleFilterList();
  }, [searchInputValues, searchCategory, searchSubCategory, searchClientName]);

  const handleDownloadReport: any = async () => {
    const reqParams: any = {
      token: AccessToken?.token,
      method: 'get_subcategory_report_print',
      entity: 'report_print',
      category: searchCategory,
      sub_category: searchSubCategory,
      client_name: searchClientName,
      from_date: searchInputValues?.fromDate,
      to_date: searchInputValues?.toDate,
    };
    let downloadReportApi: any = await DownloadReportApi(reqParams);

    if (downloadReportApi?.status === 'success') {
      window.open(downloadReportApi?.data?.print_url);
    }
  };

  return (
    <div className="container mb-5">
      <div className='row justify-content-center'>
        <div className='col-lg-10 col-12'>
          <div className='col-lg-10 col-10 mx-auto'>
            <div className="my-1 d-flex justify-content-between">
              <h5>Sub Category Report</h5>
              <button
                type="button"
                className="btn btn-primary btn-sm py-0 px-3 download-report-btn"
                onClick={handleDownloadReport}
              >
                <span className="fs-6">Print</span>
              </button>
            </div>
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

          <div className="col-lg-10 col-12 mx-auto table-responsive report-table-container">
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
                          <td>{data.total_gross_weight?.toFixed(3)}</td>
                          <td>{data.total_net_weight?.toFixed(3)}</td>
                          <td>{data.total_amount?.toFixed(2)}</td>
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
      </div>
    </div>
  );
};

export default SubCategoryReport;
