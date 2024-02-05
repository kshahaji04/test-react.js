import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const CreateEmeraldChittiApi = async (request: any) => {
  console.log('create chitti req', request);

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
    abb: request.date,
    date: request.transactionDate,
    emerald_chitti_table: request.emeraldChittiTableData,
  };

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: request.token,
    },
  };
  console.log('body', body);

  await axios
    .post(`${BASE_URL}${params}`, body, config)
    .then((res: any) => {
      console.log('create chitti res', res);
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default CreateEmeraldChittiApi;
