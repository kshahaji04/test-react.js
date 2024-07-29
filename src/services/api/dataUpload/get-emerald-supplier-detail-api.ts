import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetEmeraldSupplierDetail: any = async (request: any) => {
  const version = 'v1';
  const method = 'get_emeralds';
  const entity = 'emerald_api';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${request.id}`;

  const response = await callGetAPI(url, request.token);
  return response.data;
};

export default GetEmeraldSupplierDetail;
