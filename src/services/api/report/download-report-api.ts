import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const DownloadReportApi = async (request: any) => {
  console.log('request', request);
  let response: any;
  const version = 'v1';
  let method = request.method;
  let entity = request.entity;
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
  if (request?.supplier) queryParams?.append('supplier', request?.supplier);
  if (request?.project) queryParams?.append('project', request?.project);

  const params = `/api/method/challan.sdk.api?${queryParams.toString()}`;

  // const params = `/api/method/challan.sdk.api?version=${version}&method=${request.method}&entity=${request.entity}`;

  const config = {
    headers: {
      Authorization: request.token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res.data.message;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default DownloadReportApi;
