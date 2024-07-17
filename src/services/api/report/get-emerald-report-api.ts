import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const getEmeraldReportApi: any = async (request: any) => {
  let response: any;
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
      response = handleApiError(err);
    });
  return response;
};

export default getEmeraldReportApi;
