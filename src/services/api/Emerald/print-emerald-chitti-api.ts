import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const PrintEmeraldChittiApi = async (token: any, name: any) => {
  const version = 'v1';
  const method = 'get_emerald_chitti_print';
  const entity = 'emerald_chitti_print_api';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${name}`;

  const response = await callGetAPI(url, token);
  return response.data.message;
};

export default PrintEmeraldChittiApi;
