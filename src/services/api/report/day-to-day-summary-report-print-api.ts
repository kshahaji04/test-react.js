import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

export const dayToDaySummaryPrintApi = async (request: any, params: any) => {
  const urlParams: any = [];

  Object?.keys(params).forEach((key: any) => {
    urlParams.push(`${key}=${params[key]}`);
  });

  let url: any = `${BASE_URL}/api/method/challan.sdk.api?version=v1&method=get_day_to_day_wise_summary_report_print&entity=report_print&`;

  if (urlParams.length > 0) {
    url += `${urlParams.join('&')}`;
  }

  const response = await callGetAPI(url, request.token);
  return response;
};
