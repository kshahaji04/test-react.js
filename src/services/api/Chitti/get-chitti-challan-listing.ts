import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetChallanList = async (token: any) => {
  const version = 'v1';
  const method = 'get_custom_challan';
  const entity = 'challan_api';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const response = await callGetAPI(url, token);
  return response.data;
};

export default GetChallanList;
