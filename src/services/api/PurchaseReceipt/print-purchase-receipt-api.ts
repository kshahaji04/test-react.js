import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const PrintPurchaseReceiptApi = async (token: any, name: any) => {
  const version = 'v1';
  const method = 'get_purchase_receipt_print';
  const entity = 'custom_purchase_receipt';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${name}`;

  const response = await callGetAPI(url, token);
  return response.data.message;
};

export default PrintPurchaseReceiptApi;
