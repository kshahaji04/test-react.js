import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const CreateEmeraldChittiApi = async (request: any) => {
  console.log('create chitti req', request);

  let response: any;
  // const params = `/api/resource/Challan`;

  let body = {
    client_name: request.clientName,
    client_group: request.clientGroup,
    abb: request.date,
    date: request.date,
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
    .post(`${BASE_URL}/api/resource/Emerald Chitti`, body, config)
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
