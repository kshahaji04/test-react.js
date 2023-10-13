import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../store/slices/auth/token-login-slice';

import {
  getEmeraldReportData,
  get_emerald_report_data,
} from '../../store/slices/report/get-emerald-report-slice';

const UseEmeraldReportHook = () => {
  const dispatch = useDispatch();

  const emeraldreportDataFromStore: any = useSelector(get_emerald_report_data);
  console.log(
    'emeraldreportDataFromStore from store',
    emeraldreportDataFromStore
  );
  const [emeraldReportData, setEmeraldReportData] = useState<any>([]);

  const AccessToken: any = useSelector(get_access_token);

  useEffect(() => {
    dispatch(getEmeraldReportData(AccessToken?.token));
  }, []);

  useEffect(() => {
    if (
      emeraldreportDataFromStore?.data?.length > 0 &&
      emeraldreportDataFromStore?.data !== null
    ) {
      setEmeraldReportData([...emeraldreportDataFromStore?.data]);
    } else {
      setEmeraldReportData([]);
    }
  }, [emeraldreportDataFromStore]);
  return { emeraldReportData };
};

export default UseEmeraldReportHook;
