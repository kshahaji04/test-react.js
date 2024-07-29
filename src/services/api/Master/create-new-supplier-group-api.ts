import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

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

  const getHeaders = headerGenerator(token);

  await axios
    .post(`${BASE_URL}/api/method/challan.sdk.api`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default CreateNewSupplierGroupApi;
