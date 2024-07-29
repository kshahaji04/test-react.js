import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const getSubCategoryCategoryApi: any = async (token: any) => {
  const version = 'v1';
  const method = 'get_subcategory_category';
  const entity = 'subcategory_category';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const response = await callGetAPI(url, token);
  return response;
};

export default getSubCategoryCategoryApi;
