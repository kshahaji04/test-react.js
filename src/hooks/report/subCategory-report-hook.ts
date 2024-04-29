import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getSubCategoryReportData,
  get_subcategory_report_data,
} from '../../store/slices/report/get-subcategory-report-slice';

const useSubCategoryReportHook = () => {
  const dispatch = useDispatch();

  const subCategoryreportDataFromStore: any = useSelector(
    get_subcategory_report_data
  );

  const [subCategoryReportData, setSubCategoryReportData] = useState<any>([]);

  const accessToken: any = useSelector(get_access_token);

  useEffect(() => {
    const reqParams: any = {
      token: accessToken?.token,
    };
    dispatch(getSubCategoryReportData(reqParams));
  }, []);

  useEffect(() => {
    if (
      subCategoryreportDataFromStore?.data?.length > 0 &&
      subCategoryreportDataFromStore?.data !== null
    ) {
      setSubCategoryReportData([...subCategoryreportDataFromStore?.data]);
    } else {
      setSubCategoryReportData([]);
    }
  }, [subCategoryreportDataFromStore]);
  return { subCategoryReportData };
};

export default useSubCategoryReportHook;
