import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const GetSpecificEmeraldListData = async (request: any) => {
  console.log('req', request);
  let response: any;
  const version = 'v1';
  const method = 'get_specific_emerald_chitti';
  const entity = 'specific_emerald_chitti';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${request.name}`;

  const config = {
    headers: {
      Authorization: request.token,
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

export default GetSpecificEmeraldListData;
