import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import {
  chittiCategoryPartywiseReportApi,
  chittiCategorySummaryReportApi,
  chittiSubcategoryReportApi,
} from '../../services/api/report/get-chitti-reports-api';
import {
  chittiCategoryPartywisePrintApi,
  chittiCategorySummaryPrintApi,
  chittiSubcategoryPrintApi,
} from '../../services/api/report/get-chitti-print-api';

const useReportHook = () => {
  const location = useLocation();

  let path: any = location.pathname;
  const todayDate: any = new Date()?.toISOString()?.split('T')[0];

  const [reportData, setReportData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchInputValues, setSearchInputValues] = useState<any>({
    from_date: todayDate,
    to_date: todayDate,
  });

  const accessToken: any = useSelector(get_access_token);
  useEffect(() => {
    getReportData();
  }, [path]);

  const getReportData: any = async () => {
    let reportData;
    setIsLoading(true);
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
    } else if (path === '/report/chitti/subcategory') {
      reportData = await chittiSubcategoryReportApi(
        accessToken.token,
        searchInputValues
      );
    } else if (path === '/report/chitti/categorypartywise') {
      reportData = await chittiCategoryPartywiseReportApi(
        accessToken.token,
        searchInputValues
      );
    } else if (path === '/report/chitti/categorysummary') {
      reportData = await chittiCategorySummaryReportApi(
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
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } else {
      setReportData([]);
      setIsLoading(false);
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
        case '/report/chitti/subcategory':
          reportPrint = await chittiSubcategoryPrintApi(
            accessToken.token,
            searchInputValues
          );
          break;
        case '/report/chitti/categorypartywise':
          reportPrint = await chittiCategoryPartywisePrintApi(
            accessToken.token,
            searchInputValues
          );
          break;
        case '/report/chitti/categorysummary':
          reportPrint = await chittiCategorySummaryPrintApi(
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
    isLoading,
  };
};

export default useReportHook;
