import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const GetDetailOfSalesReturnApi = async (request: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_name_specific_sales_return';
  const entity = 'sales_return';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${request.name}`;

  const getHeaders = headerGenerator(request.token);

  await axios
    .get(`${BASE_URL}${params}`, getHeaders)
    .then((res: any) => {
      response = res.data;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default GetDetailOfSalesReturnApi;
