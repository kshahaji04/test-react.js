import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const GetClientNameList = async (token: any) => {
  console.log('tokennnn', token);
  let response: any;
  const version = 'v1';
  const method = 'get_client';
  const entity = 'client_api';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res.data;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default GetClientNameList;
