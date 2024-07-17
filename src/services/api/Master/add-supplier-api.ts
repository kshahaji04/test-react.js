import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const CreateNewSupplierApi: any = async (
  token: any,
  title: any,
  groupName: any
) => {
  let response: any;

  let version: any = 'v1';
  let method: any = 'create_supplier_name_supplier_group';
  let entity: any = 'post_supplier_name_supplier_group';

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  };

  let body = {
    version: version,
    method: method,
    entity: entity,
    supplier_name: title,
    supplier_group: groupName,
  };

  await axios
    .post(`${BASE_URL}/api/method/challan.sdk.api`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default CreateNewSupplierApi;
