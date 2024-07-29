import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetEmeraldSupplier: any = async (request: any) => {
  const version = 'v1';
  const method = 'get_emerald_supplier';
  const entity = 'all_emeralds_supplier';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const response = await callGetAPI(url, request.token);
  return response;
};

export default GetEmeraldSupplier;
