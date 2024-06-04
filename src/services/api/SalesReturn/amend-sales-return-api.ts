import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

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
      console.log(err);
    });
  return response;
};
