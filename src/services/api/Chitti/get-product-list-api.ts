import { BASE_URL, headerGenerator } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetProductListApi = async (token: any) => {
  const version = 'v1';
  const method = 'get_product';
  const entity = 'product';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const response = await callGetAPI(url, token);
  return response.data;
};

export default GetProductListApi;
