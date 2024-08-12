import { BASE_URL } from '../../config/api-config';
import { callPostAPI } from '../utils';

const CreateNewSupplierApi: any = async (
  token: any,
  title: any,
  groupName: any
) => {
  let response: any;

  let version: any = 'v1';
  let method: any = 'create_supplier_name_supplier_group';
  let entity: any = 'post_supplier_name_supplier_group';

  let body = {
    version: version,
    method: method,
    entity: entity,
    supplier_name: title,
    supplier_group: groupName,
  };

  const url: any = `${BASE_URL}/api/method/challan.sdk.api`;

  response = await callPostAPI(url, body, token);
  return response;
};

export default CreateNewSupplierApi;
