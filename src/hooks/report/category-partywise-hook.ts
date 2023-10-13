import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getCategoryPartywiseReportData,
  get_category_partywise_report_data,
} from '../../store/slices/report/get-category-partywise-report-slice';

const UseCategoryPartywiseReportHook = () => {
  const dispatch = useDispatch();

  const CategoryPartywisereportDataFromStore: any = useSelector(
    get_category_partywise_report_data
  );
  console.log(
    'CategoryPartywisereportDataFromStore from store',
    CategoryPartywisereportDataFromStore
  );
  const [categoryPartywiseReportData, setCategoryPartywiseReportData] =
    useState<any>([]);

  const AccessToken: any = useSelector(get_access_token);

  useEffect(() => {
    dispatch(getCategoryPartywiseReportData(AccessToken?.token));
  }, []);

  useEffect(() => {
    if (
      CategoryPartywisereportDataFromStore?.data?.length > 0 &&
      CategoryPartywisereportDataFromStore?.data !== null
    ) {
      setCategoryPartywiseReportData([
        ...CategoryPartywisereportDataFromStore?.data,
      ]);
    } else {
      setCategoryPartywiseReportData([]);
    }
  }, [CategoryPartywisereportDataFromStore]);

  return { categoryPartywiseReportData };
};

export default UseCategoryPartywiseReportHook;
