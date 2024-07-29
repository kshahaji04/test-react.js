import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetEmeraldShilpiDetailsApi = async (request: any) => {
  const version = 'v1';
  const method = 'get_emeralds_shilpi';
  const entity = 'emerald_shilpi';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${request.id}`;

  const response = await callGetAPI(url, request.token);
  return response;
};

export default GetEmeraldShilpiDetailsApi;
