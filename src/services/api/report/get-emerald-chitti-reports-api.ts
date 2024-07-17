import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

export const EmeraldChittiCategoryPartywiseReportApi = async (
  get_access_token: any,
  params: any
) => {
  let response: any;
  const getHeaders = headerGenerator(get_access_token);

  const urlParams: any = [];

  Object?.keys(params).forEach((key: any) => {
    urlParams.push(`${key}=${params[key]}`);
  });

  // Construct the URL based on the URL parameters
  let url: any =
    '/api/method/challan.sdk.api?version=v1&method=get_emerald_category_partywise_report&entity=category_partywise&';
  if (urlParams.length > 0) {
    url += `${urlParams.join('&')}`;
  }

  await axios
    .get(`${BASE_URL}${url}`, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });

  return response;
};
