import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { get_access_token } from '../../store/slices/auth/token-login-slice';
import {
  getSubCategoryReportData,
  get_subcategory_report_data,
} from '../../store/slices/report/get-subcategory-report-slice';

const UseSubCategoryReportHook = () => {
  const dispatch = useDispatch();

  const SubCategoryreportDataFromStore: any = useSelector(
    get_subcategory_report_data
  );
  console.log('report data from store', SubCategoryreportDataFromStore);
  const [subCategoryReportData, setSubCategoryReportData] = useState<any>([]);

  const AccessToken: any = useSelector(get_access_token);

  useEffect(() => {
    const reqParams: any = {
      token: AccessToken?.token,
    };
    dispatch(getSubCategoryReportData(reqParams));
  }, []);

  useEffect(() => {
    if (
      SubCategoryreportDataFromStore?.data?.length > 0 &&
      SubCategoryreportDataFromStore?.data !== null
    ) {
      setSubCategoryReportData([...SubCategoryreportDataFromStore?.data]);
    } else {
      setSubCategoryReportData([]);
    }
  }, [SubCategoryreportDataFromStore]);
  return { subCategoryReportData };
};

export default UseSubCategoryReportHook;
