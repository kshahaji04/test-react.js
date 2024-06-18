import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

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

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: request.token,
    },
  };

  await axios
    .post(`${BASE_URL}/api/method/challan.sdk.api`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default CreatePurchaseReceiptApi;
