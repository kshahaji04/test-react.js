import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const UpdateEmeraldChittiApi = async (request: any) => {
  console.log('create chitti req', request);
  console.log('create chitti req na', request.narrationTableData);
  let response: any;

  const params = `/api/resource/Emerald Chitti/${request.name}`;

  let body = {
    client_name: request.clientName,
    abb: request.date,
    // date: request.date,
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
