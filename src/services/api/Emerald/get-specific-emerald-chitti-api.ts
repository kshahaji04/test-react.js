import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetSpecificEmeraldListData = async (request: any) => {
  const version = 'v1';
  const method = 'get_specific_emerald_chitti';
  const entity = 'specific_emerald_chitti';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${request.name}`;

  const response = await callGetAPI(url, request.token);
  return response.data;
};

export default GetSpecificEmeraldListData;
