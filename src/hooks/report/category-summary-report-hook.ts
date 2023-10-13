import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getSubCategoryReportData,
  get_subcategory_report_data,
} from '../../store/slices/report/get-subcategory-report-slice';
import {
  getCategorySummaryReportData,
  get_category_summary_report_data,
} from '../../store/slices/report/get-category-summary-report-slice';

const UseCategorySummaryReportHook = () => {
  const dispatch = useDispatch();

  const CategorySummaryreportDataFromStore: any = useSelector(
    get_category_summary_report_data
  );
  console.log(
    'CategorySummaryreportDataFromStore from store',
    CategorySummaryreportDataFromStore
  );
  const [categorySummaryReportData, setCategorySummaryReportData] =
    useState<any>([]);

  const AccessToken: any = useSelector(get_access_token);

  useEffect(() => {
    dispatch(getCategorySummaryReportData(AccessToken?.token));
  }, []);

  useEffect(() => {
    if (
      CategorySummaryreportDataFromStore?.data?.length > 0 &&
      CategorySummaryreportDataFromStore?.data !== null
    ) {
      setCategorySummaryReportData([
        ...CategorySummaryreportDataFromStore?.data,
      ]);
    } else {
      setCategorySummaryReportData([]);
    }
  }, [CategorySummaryreportDataFromStore]);
  return { categorySummaryReportData };
};

export default UseCategorySummaryReportHook;
