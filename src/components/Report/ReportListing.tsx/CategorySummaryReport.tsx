import { useRef, useState, useEffect } from 'react';
import useCategorySummaryReportHook from '../../../hooks/report/category-summary-report-hook';
import FilterReportListing from './FilterReportListing';
import useCategoryHook from '../../../hooks/Master/category-hook';
import ShowTotalAmountOfReportData from './ShowTotalAmountOfReportData';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCategorySummaryReportData } from '../../../store/slices/report/get-category-summary-report-slice';
import DownloadReportApi from '../../../services/api/report/Chitti/download-report-api';

const CategorySummaryReport = () => {
  const dispatch = useDispatch();
  const { categorySummaryReportData }: any = useCategorySummaryReportHook();
  const { CategoryList }: any = useCategoryHook();

  const accessToken: any = useSelector(get_access_token);

  const [searchInputValues, setSearchInputValues] = useState({
    fromDate: '',
    toDate: '',
  });

  const showCategoryInFilter = useRef(true);
  const showDateInFilter = useRef(true);

  const [searchCategory, setSearchCategory] = useState<any>('');

  const handleSearchInput: any = (e: any) => {
    const { name, value } = e.target;
    setSearchInputValues({
      ...searchInputValues,
      [name]: value,
    });
  };

  useEffect(() => {
    const handleFilterList: any = () => {
      const reqParams: any = {
        token: accessToken?.token,
        category: searchCategory,
        from_date: searchInputValues?.fromDate,
        to_date: searchInputValues?.toDate,
      };

      if (
        CategoryList?.length > 0 &&
        CategoryList !== null &&
        CategoryList.find((data: any) => data === searchCategory)
      ) {
        dispatch(getCategorySummaryReportData(reqParams));
      }

      if ((reqParams?.from_date || reqParams?.to_date)?.length > 0) {
        dispatch(getCategorySummaryReportData(reqParams));
      }

      const checkNoFilterApply = () => {
        if (!reqParams.category && !reqParams.from_date && !reqParams.to_date) {
          return true;
        }
        return false;
      };
      if (checkNoFilterApply()) {
        dispatch(getCategorySummaryReportData(reqParams));
      }
    };

    handleFilterList();
  }, [searchInputValues, searchCategory]);

  const handleDownloadReport: any = async () => {
    const reqParams: any = {
      token: accessToken?.token,
      method: 'get_category_summary_report_print',
      entity: 'print_report_category_summary',
      category: searchCategory,
      from_date: searchInputValues?.fromDate,
      to_date: searchInputValues?.toDate,
    };
    let downloadReportApi: any = await DownloadReportApi(reqParams);
    if (downloadReportApi?.status === 'success') {
      window.open(downloadReportApi?.data?.print_url);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-12">
          <div className="col-lg-12 col-12 mx-auto">
            <div className="d-flex justify-content-between my-1">
              <h5>Category Summary Report</h5>
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
            CategoryList={CategoryList}
            searchCategory={searchCategory}
            setSearchCategory={setSearchCategory}
            handleSearchInput={handleSearchInput}
            showCategoryInFilter={showCategoryInFilter}
            showDateInFilter={showDateInFilter}
          />
          <div className="col-lg-12 col-12 mx-auto table-responsive report-table-container">
            <table className="table table-striped table-hover">
              <thead className="report-table-head-row sticky-top">
                <tr className="report-table-head-tr text-uppercase">
                  <th scope="col">Sr No.</th>
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
                          <td>{index + 1}</td>
                          <td>{data.category}</td>
                          <td>{data.total_gross_weight?.toFixed(3)}</td>
                          <td>{data.total_net_weight?.toFixed(3)}</td>
                          <td>{data.total_amount?.toFixed(2)}</td>
                        </tr>
                      );
                    })}
                    <ShowTotalAmountOfReportData
                      data={categorySummaryReportData}
                      colSpan="2"
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

export default CategorySummaryReport;
