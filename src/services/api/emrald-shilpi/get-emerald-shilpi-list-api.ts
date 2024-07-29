import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetEmeraldShilpiListApi = async (token: any) => {
  const version = 'v1';
  const method = 'get_emerald_shilpi_list';
  const entity = 'emerald_shilpi_list';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const response = await callGetAPI(url, token);
  return response;
};

export default GetEmeraldShilpiListApi;
