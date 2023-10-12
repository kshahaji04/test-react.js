import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  getReportTableData,
  get_report_table_data,
} from '../../store/slices/report/get-report-tableData-slice';
import { get_access_token } from '../../store/slices/auth/token-login-slice';

const UseReportHook = () => {
  const dispatch = useDispatch();

  const reportDataFromStore: any = useSelector(get_report_table_data);
  console.log('report data from store', reportDataFromStore);
  const [reportTableData, setReportTableData] = useState<any>([]);

  const AccessToken: any = useSelector(get_access_token);

  useEffect(() => {
    dispatch(getReportTableData(AccessToken?.token));
  }, []);

  useEffect(() => {
    if (
      reportDataFromStore?.data?.length > 0 &&
      reportDataFromStore?.data !== null
    ) {
      setReportTableData([...reportDataFromStore?.data]);
    } else {
      setReportTableData([]);
    }
  }, [reportDataFromStore]);
  return { reportTableData };
};

export default UseReportHook;
