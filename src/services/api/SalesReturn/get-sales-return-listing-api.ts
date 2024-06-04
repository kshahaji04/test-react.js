import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const GetSalesReturnListingApi = async (token: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_list_sales_return';
  const entity = 'sales_return';

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

export default GetSalesReturnListingApi;