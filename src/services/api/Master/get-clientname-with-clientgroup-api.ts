import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const getClientNameAndClientGrpApi: any = async (token: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_client_group';
  const entity = 'client_group_filter';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default getClientNameAndClientGrpApi;
