import axios from 'axios';
import { BASE_URL } from '../../../config/api-config';

const getCategorySummaryReportApi: any = async (request?: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_category_summary_report';
  const entity = 'category_summary';

  const queryParams = new URLSearchParams({
    version,
    method,
    entity,
  });

  if (request?.category) queryParams?.append('category', request?.category);
  if (request?.from_date) queryParams?.append('from_date', request?.from_date);
  if (request?.to_date) queryParams?.append('to_date', request?.to_date);

  const params = `/api/method/challan.sdk.api?${queryParams?.toString()}`;

  const config = {
    headers: {
      Authorization: request.token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default getCategorySummaryReportApi;
