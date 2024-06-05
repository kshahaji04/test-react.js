import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const UpdateEmeraldChittiApi = async (request: any) => {
  let response: any;

  const params = `/api/method/challan.api.put_emerald_chitti.put_emerald`;

  let body = {
    name: request.name,
    client_name: request.clientName,
    abb: request.date,
    date: request.transactionDate,
    remarks: request.remarks,
    emerald_chitti_table: request.challanTableData,
    // challan_table: request.challanTableData,
  };

  const config = {
    headers: {
      Authorization: request.token,
    },
  };

  await axios
    .put(`${BASE_URL}${params}`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default UpdateEmeraldChittiApi;
