import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from './error-handler';

const pendingSubmissionRecords = async (token: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_not_submitted_purchase_receipt';
  const entity = 'custom_purchase_receipt';

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
      response = handleApiError(err);
    });
  return response;
};

export default pendingSubmissionRecords;
