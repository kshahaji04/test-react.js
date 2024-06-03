import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const DeleteSalesReturnApi = async (token: any, name: any) => {
  console.log('tokennnn', token);
  let response: any;
  const version = 'v1';
  const method = 'delete_sales_return';
  const entity = 'sales_return';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${name}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .delete(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default DeleteSalesReturnApi;
