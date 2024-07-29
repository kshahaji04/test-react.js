import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

export const EmeraldChittiCategoryPartywiseReportApi = async (
  get_access_token: any,
  params: any
) => {
  const urlParams: any = [];

  Object?.keys(params).forEach((key: any) => {
    urlParams.push(`${key}=${params[key]}`);
  });

  // Construct the URL based on the URL parameters
  let url: any = `${BASE_URL}/api/method/challan.sdk.api?version=v1&method=get_emerald_category_partywise_report&entity=category_partywise&`;
  if (urlParams.length > 0) {
    url += `${urlParams.join('&')}`;
  }

  const response = await callGetAPI(url, get_access_token);
  return response;
};
