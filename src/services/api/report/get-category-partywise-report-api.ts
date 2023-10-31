import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const getCategoryPartywiseReportApi: any = async (request?: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_category_partywise_report';
  const entity = 'category_partywise';
  const queryParams = new URLSearchParams({
    version,
    method,
    entity,
  });

  if (request?.category) queryParams?.append('category', request?.category);
  if (request?.client_name)
    queryParams.append('client_name', request?.client_name);
  if (request?.from_date) queryParams?.append('from_date', request?.from_date);
  if (request?.to_date) queryParams?.append('to_date', request?.to_date);

  const params = `/api/method/challan.sdk.api?${queryParams.toString()}`;

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

export default getCategoryPartywiseReportApi;
