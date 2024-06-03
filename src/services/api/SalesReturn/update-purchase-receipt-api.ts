import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const UpdateSalesReturnApi = async (request: any) => {
  let response: any;

  const params = `/api/resource/Challan/${request.name}`;

  let body = {
    abb: request.date,
    client_name: request.clientName,
    gold_rate: request.goldRate,
    remarks: request.remarks,
    sales_return_table: request.challanTableData,
  };

  const config = {
    headers: {
      Authorization: request.token,
    },
  };

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

export default UpdateSalesReturnApi;
