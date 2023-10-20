import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const PrintEmeraldChittiApi = async (token: any, name: any) => {
  console.log('tokennnn', token);
  let response: any;
  const version = 'v1';
  const method = 'get_print_emerald_chitti';
  const entity = 'print_emerald_chitti';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${name}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res.data.message;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default PrintEmeraldChittiApi;
