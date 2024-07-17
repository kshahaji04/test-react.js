import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const UpdateSalesReturnApi = async (request: any) => {
  let response: any;

  const params = `/api/method/challan.sdk.api`;

  let body = {
    version: 'v1',
    method: 'put_sales_return',
    entity: 'sales_return',
    abb: request.date,
    name: request.name,
    client_name: request.clientName,
    gold_rate: request.goldRate,
    check_916: request?.check_916,
    check_75: request?.check_75,
    sales_return_table: request.salesReturnTableData,
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
      response = handleApiError(err);
    });
  return response;
};

export default UpdateSalesReturnApi;
