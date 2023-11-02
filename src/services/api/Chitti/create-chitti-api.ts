import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const CreateChittiApi = async (request: any) => {
  console.log('create chitti req', request);

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
  console.log('body', body);

  await axios
    .post(`${BASE_URL}/api/method/challan.sdk.api`, body, config)
    .then((res: any) => {
      console.log('create chitti res', res);
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default CreateChittiApi;
