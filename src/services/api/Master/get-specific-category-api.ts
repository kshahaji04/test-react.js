import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const getSpecificCategoryApi: any = async (request: any) => {
  const version = 'v1';
  const method = 'get_sub_category_category';
  const entity = 'sub_category_category';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${request.name}`;

  const response = await callGetAPI(url, request.token);
  return response;
};

export default getSpecificCategoryApi;
