import { useEffect, useRef, useState } from 'react';
import useCategoryPartywiseReportHook from '../../../hooks/report/category-partywise-hook';
import FilterReportListing from './FilterReportListing';
import useClientNameHook from '../../../hooks/Master/client-name-hook';
import useCategoryHook from '../../../hooks/Master/category-hook';
import { useSelector } from 'react-redux';
import ShowTotalAmountOfReportData from './ShowTotalAmountOfReportData';
import { useDispatch } from 'react-redux';
import { getCategoryPartywiseReportData } from '../../../store/slices/report/get-category-partywise-report-slice';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import DownloadReportApi from '../../../services/api/report/download-report-api';

const CategoryPartyWiseReport = () => {
  const dispatch = useDispatch();
  const { categoryPartywiseReportData }: any = useCategoryPartywiseReportHook();

  const accessToken: any = useSelector(get_access_token);

  const { clientNameList }: any = useClientNameHook();
  const { CategoryList }: any = useCategoryHook();

  const [searchInputValues, setSearchInputValues] = useState({
    fromDate: '',
    toDate: '',
  });

  const showClientNameInFilter = useRef(true);
  const showCategoryInFilter = useRef(true);
  const showDateInFilter = useRef(true);

  const [searchClientName, setSearchclientName] = useState<any>('');
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
        client_name: searchClientName,
        from_date: searchInputValues?.fromDate,
        to_date: searchInputValues?.toDate,
      };
      if (
        clientNameList?.length > 0 &&
        clientNameList !== null &&
        clientNameList.find((data: any) => data === searchClientName)
      ) {
        dispatch(getCategoryPartywiseReportData(reqParams));
      }
      if (
        CategoryList?.length > 0 &&
        CategoryList !== null &&
        CategoryList.find((data: any) => data === searchCategory)
      ) {
        dispatch(getCategoryPartywiseReportData(reqParams));
      }

      if ((reqParams?.from_date || reqParams?.to_date)?.length > 0) {
        dispatch(getCategoryPartywiseReportData(reqParams));
      }

      const checkNoFilterApply = () => {
        if (
          !reqParams.category &&
          !reqParams.client_name &&
          !reqParams.from_date &&
          !reqParams.to_date
        ) {
          return true;
        }
        return false;
      };
      if (checkNoFilterApply()) {
        dispatch(getCategoryPartywiseReportData(reqParams));
      }
    };

    handleFilterList();
  }, [searchInputValues, searchClientName, searchCategory]);

  const handleDownloadReport: any = async () => {
    const reqParams: any = {
      token: accessToken?.token,
      method: 'get_category_partywise_report_print',
      entity: 'report_print_category_wise',
      category: searchCategory,
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-12 ">
          <div className="col-lg-9 col-12 mx-auto">
            <div className="mt-1 d-flex justify-content-between">
              <h5>Category Partywise Report</h5>
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
            handleSearchInput={handleSearchInput}
            showCategoryInFilter={showCategoryInFilter}
            showClientNameInFilter={showClientNameInFilter}
            showDateInFilter={showDateInFilter}
          />

          <div className="col-lg-9 col-12 mx-auto table-responsive report-table-container mb-5">
            <table className=" table table-striped table-hover ">
              <thead className="report-table-head-row sticky-top">
                <tr className="report-table-head-tr text-uppercase">
                  <th scope="col">Sr No.</th>
                  <th scope="col">Category</th>
                  <th scope="col">Client Name</th>
                  <th scope="col">Gross Weight</th>
                  <th scope="col">Net Weight</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {categoryPartywiseReportData?.length > 0 &&
                categoryPartywiseReportData !== null ? (
                  <>
                    {categoryPartywiseReportData.map(
                      (data: any, index: any) => {
                        return (
                          <>
                            <tr className="report-table-row" key={index}>
                              <td>{index + 1}</td>
                              <td>{data.category}</td>
                              <td>{data.client_name}</td>
                              <td>{data.total_gross_weight?.toFixed(3)}</td>
                              <td>{data.total_net_weight?.toFixed(3)}</td>
                              <td>{data.total_amount?.toFixed(2)}</td>
                            </tr>
                          </>
                        );
                      }
                    )}
                    <ShowTotalAmountOfReportData
                      data={categoryPartywiseReportData}
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

export default CategoryPartyWiseReport;
