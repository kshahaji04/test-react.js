import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from './error-handler';

export const challanAmendApi: any = async (request: any) => {
  let response: any;

  const params = `/api/resource/Challan`;

  let body = {
    amended_from: request.name,
    client_name: request.client_name,
    gold_rate: request.gold_rate,
    remarks: request.remarks,
    challan_table: request.challan_data,
    narration_huid: request.narration_data,
  };

  const config = {
    headers: {
      Authorization: request.token,
    },
  };

  await axios
    .post(`${BASE_URL}${params}`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};
