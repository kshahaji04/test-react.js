import { BASE_URL } from '../../config/api-config';
import { callPostAPI } from '../utils';

const CreateNewSupplierGroupApi: any = async (token: any, title: any) => {
  let response: any;

  let version = 'v1';
  let method = 'create_supplier_group_supplier_parent_group';
  let entity = 'post_supplier_group_api';
  let parent_supplier_grp = 'All Supplier Groups';

  let body = {
    version: version,
    method: method,
    entity: entity,
    supplier_group_name: title,
    parent_supplier_group: parent_supplier_grp,
  };

  const url: any = `${BASE_URL}/api/method/challan.sdk.api`;

  response = await callPostAPI(url, body, token);
  return response;
};

export default CreateNewSupplierGroupApi;
