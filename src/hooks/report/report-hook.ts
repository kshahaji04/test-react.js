import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  PRCategoryPartywisePrintApi,
  PRCategorySummaryPrintApi,
  PRSubcategoryPrintApi,
} from '../../services/api/report/get-PR-print-api';
import {
  PRCategoryPartywiseReportApi,
  PRCategorySummaryReportApi,
  PRSubcategoryReportApi,
} from '../../services/api/report/get-PR-reports-api';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  SRCategoryPartywiseReportApi,
  SRCategorySummaryReportApi,
  SRSubcategoryReportApi,
} from '../../services/api/report/get-SR-reports-api';
import { EmeraldChittiCategoryPartywiseReportApi } from '../../services/api/report/get-emerald-chitti-reports-api';
import {
  SRCategoryPartywisePrintApi,
  SRCategorySummaryPrintApi,
  SRSubcategoryPrintApi,
} from '../../services/api/report/get-SR-print-api';
import { EmeraldChittiCategoryPartywisePrintApi } from '../../services/api/report/get-emerald-chitti-print-api';

const useReportHook = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log('navigate', location);
  let path: any = location.pathname;

  const [reportData, setReportData] = useState<any>([]);
  const [searchInputValues, setSearchInputValues] = useState<any>({});

  const accessToken: any = useSelector(get_access_token);
  useEffect(() => {
    getReportData();
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
    } else if (path === '/report/purchasereceipt/categorysummary') {
      reportData = await PRCategorySummaryReportApi(
        accessToken.token,
        searchInputValues
      );
    } else if (path === '/report/salesreturn/subcategory') {
      reportData = await SRSubcategoryReportApi(
        accessToken.token,
        searchInputValues
      );
    } else if (path === '/report/salesreturn/categorypartywise') {
      reportData = await SRCategoryPartywiseReportApi(
        accessToken.token,
        searchInputValues
      );
    } else if (path === '/report/salesreturn/categorysummary') {
      reportData = await SRCategorySummaryReportApi(
        accessToken.token,
        searchInputValues
      );
    } else if (path === '/report/emeraldchitti/categorypartywise') {
      reportData = await EmeraldChittiCategoryPartywiseReportApi(
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
    } else {
      setReportData([]);
    }
  };

  const handlePrintBtn = async (): Promise<void> => {
    try {
      let reportPrint;
      switch (path) {
        case '/report/purchasereceipt/subcategory':
          reportPrint = await PRSubcategoryPrintApi(
            accessToken.token,
            searchInputValues
          );
          break;
        case '/report/purchasereceipt/categorypartywise':
          reportPrint = await PRCategoryPartywisePrintApi(
            accessToken.token,
            searchInputValues
          );
          break;
        case '/report/purchasereceipt/categorysummary':
          reportPrint = await PRCategorySummaryPrintApi(
            accessToken.token,
            searchInputValues
          );
          break;
        case '/report/salesreturn/subcategory':
          reportPrint = await SRSubcategoryPrintApi(
            accessToken.token,
            searchInputValues
          );
          break;
        case '/report/salesreturn/categorypartywise':
          reportPrint = await SRCategoryPartywisePrintApi(
            accessToken.token,
            searchInputValues
          );
          break;
        case '/report/salesreturn/categorysummary':
          reportPrint = await SRCategorySummaryPrintApi(
            accessToken.token,
            searchInputValues
          );
          break;
        case '/report/emeraldchitti/categorypartywise':
          reportPrint = await EmeraldChittiCategoryPartywisePrintApi(
            accessToken.token,
            searchInputValues
          );
          break;
        default:
          console.warn(`Unhandled path: ${path}`);
          return;
      }
      console.log('reports print', reportPrint);
      if (reportPrint?.data?.message?.status === 'success') {
        window.open(reportPrint?.data?.message?.data?.print_url);
      } else {
        toast.error('Failed to Print');
      }
    } catch (error) {
      console.error('Error fetching report print:', error);
    }
  };

  const handleSearchInput: any = (value: any, fieldName: any) => {
    setSearchInputValues((prevState: any) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  const handleSearchBtn: any = () => {
    getReportData();
  };
  console.log('report data in hook end', reportData);

  return {
    reportData,
    searchInputValues,
    setSearchInputValues,
    handleSearchInput,
    handleSearchBtn,
    handlePrintBtn,
  };
};

export default useReportHook;
