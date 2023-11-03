import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

export const challanAmendApi: any = async (request: any) => {
  let response: any;

  const params = `/api/resource/Challan`;

  let body = {
    client_name: request.client_name,
    amended_from: request.name,
    challan_table: request.challan_data,
    narration_huid: request.narration_data,
  };

  const config = {
    headers: {
      Authorization: request.token,
    },
  };
  console.log('body', body);

  await axios
    .post(`${BASE_URL}${params}`, body, config)
    .then((res: any) => {
      console.log('create chitti res', res);
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};