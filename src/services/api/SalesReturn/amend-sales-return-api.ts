import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

export const AmendSalesReturnApi: any = async (token: any, data: any) => {
  let response: any;

  const params = `/api/resource/Sales Return`;

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
