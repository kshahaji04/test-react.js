import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

export const AmendPurchaseReceiptApi: any = async (token: any, data: any) => {
  let response: any;

  const params = `/api/resource/Custom Purchase Receipt`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .post(`${BASE_URL}${params}`, data, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};
