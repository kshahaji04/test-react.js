import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const pendingSubmissionRecords = async (token: any) => {
  const version = 'v1';
  const method = 'get_not_submitted_purchase_receipt';
  const entity = 'custom_purchase_receipt';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const response = await callGetAPI(url, token);
  return response;
};

export default pendingSubmissionRecords;
