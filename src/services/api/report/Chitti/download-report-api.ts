import { BASE_URL } from '../../../config/api-config';
import { callGetAPI } from '../../utils';

const DownloadReportApi = async (request: any) => {
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

  const url = `${BASE_URL}/api/method/challan.sdk.api?${queryParams.toString()}`;

  const response = await callGetAPI(url, request.token);
  return response.data.message;
};

export default DownloadReportApi;
