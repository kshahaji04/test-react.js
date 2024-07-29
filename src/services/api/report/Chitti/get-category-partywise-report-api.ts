import { BASE_URL } from '../../../config/api-config';
import { callGetAPI } from '../../utils';

const getCategoryPartywiseReportApi: any = async (request?: any) => {
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

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?${queryParams.toString()}`;

  const response = await callGetAPI(url, request.token);
  return response;
};

export default getCategoryPartywiseReportApi;
