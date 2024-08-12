import { BASE_URL } from '../../config/api-config';
import { callPostAPI } from '../utils';

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

  const url: any = `${BASE_URL}${params}`;

  response = await callPostAPI(url, body, request.token);
  return response;
};

export default CreateEmeraldChittiApi;
