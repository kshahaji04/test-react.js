import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const getSpecificClientGroupApi: any = async (request: any) => {
  const version = 'v1';
  const method = 'get_client_name_client_group';
  const entity = 'client_name_client_group';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${request.name}`;

  const response = await callGetAPI(url, request.token);
  return response;
};

export default getSpecificClientGroupApi;
