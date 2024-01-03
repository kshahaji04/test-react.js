import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const getSupplierGroupApi: any = async (token: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_supplier_group';
  const entity = 'supplier_group_api';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default getSupplierGroupApi;
