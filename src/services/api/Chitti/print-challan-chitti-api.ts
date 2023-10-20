import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const PrintChallanChittiApi = async (token: any, name: any) => {
  console.log('tokennnn', token);
  let response: any;
  const version = 'v1';
  const method = 'get_print';
  const entity = 'print_api';

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

export default PrintChallanChittiApi;
