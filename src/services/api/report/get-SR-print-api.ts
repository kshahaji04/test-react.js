import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';
import { callGetAPI } from '../utils';

export const SRCategorySummaryPrintApi = async (request: any, params: any) => {
  const urlParams: any = [];

  Object?.keys(params).forEach((key: any) => {
    urlParams.push(`${key}=${params[key]}`);
  });

  let url: any = `${BASE_URL}/api/method/challan.sdk.api?version=v1&method=get_sr_category_summary_report_print&entity=print_report_category_summary&`;

  if (urlParams.length > 0) {
    url += `${urlParams.join('&')}`;
  }

  const response = await callGetAPI(url, request.token);
  return response;
};

export const SRCategoryPartywisePrintApi = async (
  request: any,
  params: any
) => {
  const urlParams: any = [];

  Object?.keys(params).forEach((key: any) => {
    urlParams.push(`${key}=${params[key]}`);
  });

  let url: any = `${BASE_URL}/api/method/challan.sdk.api?version=v1&method=get_sr_category_partywise_report_print&entity=report_print_category_wise&`;

  if (urlParams.length > 0) {
    url += `${urlParams.join('&')}`;
  }

  const response = await callGetAPI(url, request.token);
  return response;
};

export const SRSubcategoryPrintApi = async (request: any, params: any) => {
  const urlParams: any = [];

  Object?.keys(params).forEach((key: any) => {
    urlParams.push(`${key}=${params[key]}`);
  });

  let url: any = `${BASE_URL}/api/method/challan.sdk.api?version=v1&method=get_sr_subcategory_report_print&entity=report_print&`;

  if (urlParams.length > 0) {
    url += `${urlParams.join('&')}`;
  }

  const response = await callGetAPI(url, request.token);
  return response.data;
};
