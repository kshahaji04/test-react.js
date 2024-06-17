import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

export const EmeraldChittiCategoryPartywisePrintApi = async (
  request: any,
  params: any
) => {
  let response: any;
  const config = {
    headers: {
      Authorization: request.token,
    },
  };
  const urlParams: any = [];

  Object?.keys(params).forEach((key: any) => {
    urlParams.push(`${key}=${params[key]}`);
  });

  let url: any =
    '/api/method/challan.sdk.api?version=v1&method=get_emerald_category_partywise_report_print&entity=report_print_category_wise&';

  if (urlParams.length > 0) {
    url += `${urlParams.join('&')}`;
  }

  await axios
    .get(`${BASE_URL}${url}`, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {});
  return response;
};
