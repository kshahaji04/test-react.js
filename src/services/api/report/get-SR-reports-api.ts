import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

export const SRCategoryPartywiseReportApi = async (
  get_access_token: any,
  params: any
) => {
  const urlParams: any = [];

  Object?.keys(params).forEach((key: any) => {
    urlParams.push(`${key}=${params[key]}`);
  });

  // Construct the URL based on the URL parameters
  let url: any = `${BASE_URL}/api/method/challan.sdk.api?version=v1&method=get_sr_category_partywise_report&entity=category_partywise&`;
  if (urlParams.length > 0) {
    url += `${urlParams.join('&')}`;
  }

  const response = await callGetAPI(url, get_access_token);
  return response;
};

export const SRCategorySummaryReportApi = async (
  get_access_token: any,
  params: any
) => {
  const urlParams: any = [];

  Object?.keys(params).forEach((key: any) => {
    urlParams.push(`${key}=${params[key]}`);
  });

  // Construct the URL based on the URL parameters
  let url: any = `${BASE_URL}/api/method/challan.sdk.api?version=v1&method=get_sr_category_summary_report&entity=category_summary&`;
  if (urlParams.length > 0) {
    url += `${urlParams.join('&')}`;
  }

  const response = await callGetAPI(url, get_access_token);
  return response;
};

export const SRSubcategoryReportApi = async (
  get_access_token: any,
  params: any
) => {
  const urlParams: any = [];

  Object?.keys(params).forEach((key: any) => {
    urlParams.push(`${key}=${params[key]}`);
  });

  // Construct the URL based on the URL parameters
  let url: any = `${BASE_URL}/api/method/challan.sdk.api?version=v1&method=get_sr_subcategory_report&entity=subcategory_report&`;
  if (urlParams.length > 0) {
    url += `${urlParams.join('&')}`;
  }

  const response = await callGetAPI(url, get_access_token);
  return response;
};
