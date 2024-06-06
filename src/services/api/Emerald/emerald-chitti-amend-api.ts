import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

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
