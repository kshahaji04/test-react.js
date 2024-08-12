import { BASE_URL } from '../../config/api-config';
import { callPostAPI } from '../utils';

const CreatePurchaseReceiptApi = async (request: any) => {
  let response: any;

  const version = 'v1';
  const method = 'create_purchase_receipt';
  const entity = 'custom_purchase_receipt';

  let body = {
    version: version,
    method: method,
    entity: entity,
    abb: request.date,
    karigar_name: request.clientName,
    client_group: request.clientGroup,
    gold_rate: request.goldRate,
    check_916: request.check_916,
    check_75: request.check_75,
    purchase_receipt_table: request.challanTableData,
  };

  const url: any = `${BASE_URL}/api/method/challan.sdk.api`;

  response = await callPostAPI(url, body, request.token);
  return response;
};

export default CreatePurchaseReceiptApi;
