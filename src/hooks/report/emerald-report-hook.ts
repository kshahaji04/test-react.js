import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../store/slices/auth/token-login-slice';

import {
  getEmeraldReportData,
  get_emerald_report_data,
} from '../../store/slices/report/get-emerald-report-slice';

const useEmeraldReportHook = () => {
  const dispatch = useDispatch();

  const emeraldreportDataFromStore: any = useSelector(get_emerald_report_data);

  const [emeraldReportData, setEmeraldReportData] = useState<any>([]);

  const accessToken: any = useSelector(get_access_token);

  useEffect(() => {
    const reqParams: any = {
      token: accessToken?.token,
    };
    dispatch(getEmeraldReportData(reqParams));
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

export default useEmeraldReportHook;
