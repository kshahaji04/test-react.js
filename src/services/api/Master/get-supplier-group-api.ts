import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const getSupplierGroupApi: any = async (token: any) => {
  const version = 'v1';
  const method = 'get_supplier_group';
  const entity = 'supplier_group_api';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const response = await callGetAPI(url, token);
  return response;
};

export default getSupplierGroupApi;
