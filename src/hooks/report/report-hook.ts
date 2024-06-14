import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PRCategoryPartywisePrintApi, PRCategorySummaryPrintApi, PRSubcategoryPrintApi } from '../../services/api/report/get-print-api';
import { PRCategoryPartywiseReportApi, PRCategorySummaryReportApi, PRSubcategoryReportApi } from '../../services/api/report/get-reports-api';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  get_report_table_data
} from '../../store/slices/report/get-report-tableData-slice';
import { toast } from 'react-toastify';

const useReportHook = () => {
  const dispatch = useDispatch();
  const location = useLocation()
  console.log("navigate", location)
  let path: any = location.pathname
  const reportDataFromStore: any = useSelector(get_report_table_data);

  const [reportData, setReportData] = useState<any>([]);
  const [searchInputValues, setSearchInputValues] = useState<any>({});


  const accessToken: any = useSelector(get_access_token);
  useEffect(() => {
    getReportData()
  }, [path]);

  const getReportData: any = async () => {
    let reportData;
    if (path === '/report/purchasereceipt/subcategory') {
      reportData = await PRSubcategoryReportApi(
        accessToken.token,
        searchInputValues
      );
    } else if (path === '/report/purchasereceipt/categorypartywise') {
      reportData = await PRCategoryPartywiseReportApi(
        accessToken.token,
        searchInputValues
      );
    }
    else if (path === '/report/purchasereceipt/categorysummary') {
      reportData = await PRCategorySummaryReportApi(
        accessToken.token,
        searchInputValues
      );
    }

    if (reportData?.data?.message?.status === 'success') {
      setReportData(reportData?.data?.message?.data);
      if (reportData?.data?.message?.data?.length > 0) {
        // setIsLoading(1);
      } else {
        // setIsLoading(2);
      }
    }
  }



  const handlePrintBtn = async (): Promise<void> => {
    try {
      let reportPrint;
      switch (path) {
        case '/report/purchasereceipt/subcategory':
          reportPrint = await PRSubcategoryPrintApi(accessToken.token, searchInputValues);
          break;
        case '/report/purchasereceipt/categorypartywise':
          reportPrint = await PRCategoryPartywisePrintApi(accessToken.token, searchInputValues);
          break;
        case '/report/purchasereceipt/categorysummary':
          reportPrint = await PRCategorySummaryPrintApi(accessToken.token, searchInputValues);
          break;
        default:
          console.warn(`Unhandled path: ${path}`);
          return;
      }
      console.log("reports print", reportPrint);
      if (reportPrint?.data?.message?.status === 'success') {
        window.open(reportPrint?.data?.message?.data?.print_url);
      } else {
        toast.error("Failed to Print")
      }
    } catch (error) {
      console.error("Error fetching report print:", error);
    }
  };


  const handleSearchInput: any = (value: any, fieldName: any) => {
    setSearchInputValues((prevState: any) => ({
      ...prevState,
      [fieldName]: value,
    }));
  }
  const handleSearchBtn: any = () => {
    getReportData();
  }
  console.log("report data in hook end", reportData)

  return { reportData, searchInputValues, setSearchInputValues, handleSearchInput, handleSearchBtn, handlePrintBtn };
};

export default useReportHook;
