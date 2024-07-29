import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const getEmeraldReportApi: any = async (request: any) => {
  const version = 'v1';
  const method = 'get_emerald_shilpi_report';
  const entity = 'emerald_report';

  const queryParams = new URLSearchParams({
    version,
    method,
    entity,
  });

  if (request?.supplier) queryParams?.append('supplier', request?.supplier);
  if (request?.project) queryParams.append('project', request?.project);
  if (request?.sub_category)
    queryParams?.append('sub_category', request?.sub_category);

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?${queryParams?.toString()}`;

  const response = await callGetAPI(url, request.token);
  return response;
};

export default getEmeraldReportApi;
