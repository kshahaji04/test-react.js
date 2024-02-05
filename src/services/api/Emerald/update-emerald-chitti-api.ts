import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const UpdateEmeraldChittiApi = async (request: any) => {
  console.log('create chitti req', request);
  console.log('create chitti req na', request.narrationTableData);
  let response: any;

  const params = `/api/method/challan.api.put_emerald_chitti.put_emerald`;

  let body = {
    name: request.name,
    client_name: request.clientName,
    abb: request.date,
    date: request.transactionDate,
    emerald_chitti_table: request.challanTableData,
    // challan_table: request.challanTableData,
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

export default UpdateEmeraldChittiApi;
