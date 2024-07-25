import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const PrintSalesReturnApi = async (token: any, name: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_sales_return_print';
  const entity = 'sales_return';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${name}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res.data.message;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default PrintSalesReturnApi;