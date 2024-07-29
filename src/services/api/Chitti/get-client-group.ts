import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetClientGroupList = async (token: any) => {
  const version = 'v1';
  const method = 'get_group';
  const entity = 'client_group';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const response = await callGetAPI(url, token);
  return response.data;
};

export default GetClientGroupList;
