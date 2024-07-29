import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const getUserRoleApi: any = async (token: any) => {
  const version = 'v1';
  const method = 'get_user_roles';
  const entity = 'access_token';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const response = await callGetAPI(url, token);
  return response;
};

export default getUserRoleApi;
