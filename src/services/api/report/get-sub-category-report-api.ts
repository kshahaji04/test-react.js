import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const getSubCategoryReportApi: any = async (request?: any) => {
  console.log('subcategory req', request);
  let response: any;
  const version = 'v1';
  const method = 'get_subcategory_report';
  const entity = 'subcategory_report';
  const queryParams = new URLSearchParams({
    version,
    method,
    entity,
  });

  if (request?.category) queryParams?.append('category', request?.category);
  if (request?.sub_category)
    queryParams?.append('sub_category', request?.sub_category);
  if (request?.client_name)
    queryParams?.append('client_name', request?.client_name);
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

export default getSubCategoryReportApi;
