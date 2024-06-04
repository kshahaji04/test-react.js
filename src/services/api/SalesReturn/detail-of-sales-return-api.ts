import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const GetDetailOfSalesReturnApi = async (request: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_name_specific_sales_return';
  const entity = 'sales_return';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${request.name}`;

  const config = {
    headers: {
      Authorization: request.token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default GetDetailOfSalesReturnApi;
