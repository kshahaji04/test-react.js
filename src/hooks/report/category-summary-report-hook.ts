import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../store/slices/auth/token-login-slice';

import {
  getCategorySummaryReportData,
  get_category_summary_report_data,
} from '../../store/slices/report/get-category-summary-report-slice';

const useCategorySummaryReportHook = () => {
  const dispatch = useDispatch();

  const categorySummaryreportDataFromStore: any = useSelector(
    get_category_summary_report_data
  );

  const [categorySummaryReportData, setCategorySummaryReportData] =
    useState<any>([]);

  const accessToken: any = useSelector(get_access_token);

  useEffect(() => {
    const reqParams: any = {
      token: accessToken?.token,
    };
    dispatch(getCategorySummaryReportData(reqParams));
  }, []);

  useEffect(() => {
    if (
      categorySummaryreportDataFromStore?.data?.length > 0 &&
      categorySummaryreportDataFromStore?.data !== null
    ) {
      setCategorySummaryReportData([
        ...categorySummaryreportDataFromStore?.data,
      ]);
    } else {
      setCategorySummaryReportData([]);
    }
  }, [categorySummaryreportDataFromStore]);
  return { categorySummaryReportData };
};

export default useCategorySummaryReportHook;
