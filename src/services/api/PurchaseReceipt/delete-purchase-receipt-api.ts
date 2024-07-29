import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const DeletePurchaseReceiptApi = async (token: any, name: any) => {
  let response: any;
  const version = 'v1';
  const method = 'delete_purchase_receipt';
  const entity = 'custom_purchase_receipt';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${name}`;

  const getHeaders = headerGenerator(token);

  await axios
    .delete(`${BASE_URL}${params}`, getHeaders)
    .then((res: any) => {
      response = res.data;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default DeletePurchaseReceiptApi;
