import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const CreateEmeraldChittiApi = async (request: any) => {
  let response: any;
  const version = 'v1';
  const method = 'create_emerald_subcategory_new';
  const entity = 'emerald_chitti_subcategory';

  const params = `/api/method/challan.sdk.api`;

  let body = {
    version: version,
    method: method,
    entity: entity,
    client_name: request.clientName,
    client_group: request.clientGroup,
    remarks: request.remarks,
    gold_rate: request.goldRate,
    abb: request.date,
    date: request.transactionDate,
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

export default CreateEmeraldChittiApi;
