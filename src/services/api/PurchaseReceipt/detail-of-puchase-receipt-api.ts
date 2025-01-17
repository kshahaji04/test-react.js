import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const GetDetailOfPurchaseReceiptApi = async (request: any) => {
  console.log('tokennnn', request);
  let response: any;
  const version = 'v1';
  const method = 'get_name_specific_purchase_receipt';
  const entity = 'custom_purchase_receipt';

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

export default GetDetailOfPurchaseReceiptApi;
