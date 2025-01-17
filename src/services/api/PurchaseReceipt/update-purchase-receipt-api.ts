import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const UpdatePurchaseReceiptApi = async (request: any) => {
  let response: any;

  const params = `/api/method/challan.sdk.api`;

  let body = {
    version: 'v1',
    method: 'put_purchase_receipt',
    entity: 'custom_purchase_receipt',
    abb: request.date,
    name: request.name,
    karigar_name: request.clientName,
    gold_rate: request.goldRate,
    check_916: request?.check_916,
    check_75: request?.check_75,
    purchase_receipt_table: request.purchaseReceiptTableData,
  };

  const getHeaders = headerGenerator(request.token);

  await axios
    .put(`${BASE_URL}${params}`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default UpdatePurchaseReceiptApi;
