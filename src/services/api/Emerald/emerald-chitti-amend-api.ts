import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

export const EmeraldChittiAmendApi: any = async (request: any) => {
  let response: any;

  const params = `/api/resource/Emerald Chitti`;

  let body = {
    amended_from: request.name,
    client_name: request.clientName,
    client_group: request.clientGroup,
    remarks: request.remarks,
    gold_rate: request.goldRate,
    abb: request.date,
    date: request.date,
    emerald_chitti_table: request.emeraldChittiTableData,
  };

  const getHeaders = headerGenerator(request.token);

  await axios
    .post(`${BASE_URL}${params}`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};
