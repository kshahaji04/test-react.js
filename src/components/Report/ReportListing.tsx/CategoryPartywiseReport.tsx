import { useEffect, useRef, useState } from 'react';
import UseCategoryPartywiseReportHook from '../../../hooks/report/category-partywise-hook';
import FilterReportListing from './FilterReportListing';
import UseClientNameHook from '../../../hooks/Master/client-name-hook';
import UseCategoryHook from '../../../hooks/Master/category-hook';
import { useSelector } from 'react-redux';
import { get_chitti_challan } from '../../../store/slices/Chitti/get-chitti-challan-list-slice';
import ShowTotalAmountOfReportData from './ShowTotalAmountOfReportData';
import { useDispatch } from 'react-redux';
import { getCategoryPartywiseReportData } from '../../../store/slices/report/get-category-partywise-report-slice';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';

const CategoryPartyWiseReport = () => {
  const dispatch = useDispatch();
  const { categoryPartywiseReportData }: any = UseCategoryPartywiseReportHook();
  console.log(
    'categoryPartywiseReportData in tssx',
    categoryPartywiseReportData
  );

  const challan_data_from_store: any = useSelector(get_chitti_challan);
  const AccessToken: any = useSelector(get_access_token);

  console.log('challandata', challan_data_from_store);
  const { clientNameList }: any = UseClientNameHook();
  const { CategoryList }: any = UseCategoryHook();

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

  console.log('search category', searchCategory);

  useEffect(() => {
    const handleFilterList: any = () => {
      const reqParams: any = {
        token: AccessToken?.token,
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

  // const handleDownloadReport: any = async () => {
  // const reqParams: any = {
  //   token: AccessToken?.token,
  //   method: 'get_subcategory_report_print',
  //   entity: 'report_print',
  // };
  // let downloadReportApi: any = await DownloadReportApi(reqParams);
  // if (downloadReportApi?.status === 'success') {
  //   window.open(downloadReportApi?.data?.print_url);
  // }
  // };

  // const filteredList =
  //   categoryPartywiseReportData?.length > 0 &&
  //   categoryPartywiseReportData !== null &&
  //   (searchInputValues.fromDate ||
  //     searchInputValues.toDate ||
  //     searchClientName ||
  //     searchCategory)
  //     ? categoryPartywiseReportData.filter((item: any) => {
  //         const categoryMatch = searchCategory
  //           ? item?.category
  //               ?.toLowerCase()
  //               .includes(searchCategory?.toLowerCase())
  //           : true;
  //         const clientNameMatch = searchClientName
  //           ? item?.client_name
  //               ?.toLowerCase()
  //               ?.includes(searchClientName?.toLowerCase())
  //           : true;

  //         const dateMatch =
  //           searchInputValues.fromDate && searchInputValues.toDate
  //             ? item?.date >= searchInputValues.fromDate &&
  //               item?.date <= searchInputValues.toDate
  //             : true;

  //         return categoryMatch && clientNameMatch && dateMatch;
  //       })
  //     : categoryPartywiseReportData;

  return (
    <div className="container">
      <div className="my-1 d-flex justify-content-between">
        <h5>Category Partywise Report</h5>
        {/* <button
          type="button"
          className="btn btn-primary btn-sm py-0 download-report-btn"
          onClick={handleDownloadReport}
        >
          <span className="fs-6">Download Report</span>
        </button> */}
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
        // handleFilterList={handleFilterList}
      />
      <div className="table-responsive  report-table-container mb-5">
        <table className="table table-striped table-hover ">
          <thead className="report-table-head-row sticky-top">
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
            {categoryPartywiseReportData?.length > 0 &&
            categoryPartywiseReportData !== null ? (
              <>
                {categoryPartywiseReportData.map((data: any, index: any) => {
                  return (
                    <>
                      <tr className="report-table-row" key={index}>
                        <td>{index + 1}</td>
                        <td>{data.category}</td>
                        <td>{data.client_name}</td>
                        <td>{data.total_gross_weight}</td>
                        <td>{data.total_net_weight}</td>
                        <td>{data.total_amount}</td>
                      </tr>
                    </>
                  );
                })}
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
  );
};

export default CategoryPartyWiseReport;
