import { BASE_URL } from '../../config/api-config';
import { callPostAPI } from '../utils';

const CreateChittiApi = async (request: any) => {
  let response: any;

  const version = 'v1';
  const method = 'create_challan_new_subcategory_narration';
  const entity = 'create_challan_subcategory_new';

  let body = {
    version: version,
    method: method,
    entity: entity,
    abb: request.date,
    client_name: request.clientName,
    client_group: request.clientGroup,
    gold_rate: request.goldRate,
    remarks: request.remarks,
    challan_table: request.challanTableData,
    narration_huid: request.narrationTableData,
  };

  const url: any = `${BASE_URL}/api/method/challan.sdk.api`;

  response = await callPostAPI(url, body, request.token);
  return response;
};

export default CreateChittiApi;
