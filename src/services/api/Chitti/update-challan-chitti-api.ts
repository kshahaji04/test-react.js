import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const UpdateChittiApi = async (request: any) => {
  console.log('create chitti req', request);
  console.log('create chitti req na', request.narrationTableData);
  let response: any;

  const params = `/api/resource/Challan/${request.name}`;

  let body = {
    abb: request.date,
    client_name: request.clientName,
    gold_rate: request.goldRate,
    remarks: request.remarks,
    narration_huid: request.narrationTableData,
    challan_table: request.challanTableData,
  };

  const config = {
    headers: {
      Authorization: request.token,
    },
  };
  console.log('body', body);

  await axios
    .put(`${BASE_URL}${params}`, body, config)
    .then((res: any) => {
      console.log('create chitti res', res);
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default UpdateChittiApi;
