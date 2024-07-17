import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const CreateSalesReturnApi = async (request: any) => {
  let response: any;

  const version = 'v1';
  const method = 'create_sales_return';
  const entity = 'sales_return';

  let body = {
    version: version,
    method: method,
    entity: entity,
    abb: request.date,
    client_name: request.clientName,
    client_group: request.clientGroup,
    gold_rate: request.goldRate,
    check_916: request?.check_916,
    check_75: request?.check_75,
    sales_return_table: request.challanTableData,
  };

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: request.token,
    },
  };

  await axios
    .post(`${BASE_URL}/api/method/challan.sdk.api`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default CreateSalesReturnApi;
