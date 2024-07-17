import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

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

export default CreateChittiApi;
