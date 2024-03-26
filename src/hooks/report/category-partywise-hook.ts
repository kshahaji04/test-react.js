import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getCategoryPartywiseReportData,
  get_category_partywise_report_data,
} from '../../store/slices/report/get-category-partywise-report-slice';

const useCategoryPartywiseReportHook = () => {
  const dispatch = useDispatch();

  const categoryPartywisereportDataFromStore: any = useSelector(
    get_category_partywise_report_data
  );

  const [categoryPartywiseReportData, setCategoryPartywiseReportData] =
    useState<any>([]);

  const accessToken: any = useSelector(get_access_token);

  useEffect(() => {
    const reqParams: any = {
      token: accessToken?.token,
    };
    dispatch(getCategoryPartywiseReportData(reqParams));
  }, []);

  useEffect(() => {
    if (
      categoryPartywisereportDataFromStore?.data?.length > 0 &&
      categoryPartywisereportDataFromStore?.data !== null
    ) {
      setCategoryPartywiseReportData([
        ...categoryPartywisereportDataFromStore?.data,
      ]);
    } else {
      setCategoryPartywiseReportData([]);
    }
  }, [categoryPartywisereportDataFromStore]);

  return { categoryPartywiseReportData };
};

export default useCategoryPartywiseReportHook;
