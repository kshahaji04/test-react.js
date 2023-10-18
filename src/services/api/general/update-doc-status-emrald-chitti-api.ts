import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const UpdateDocStatusEmeraldChittiApi = async (
  token: any,
  docStatus: any,
  name: any
) => {
  let response: any;

  const params = `/api/resource/Emerald Chitti/${name}`;

  let body = {
    docstatus: docStatus,
  };

  const config = {
    headers: {
      Authorization: token,
    },
  };
  console.log('body', body);

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

export default UpdateDocStatusEmeraldChittiApi;
