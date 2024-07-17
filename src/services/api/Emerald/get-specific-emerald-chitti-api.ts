import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const GetSpecificEmeraldListData = async (request: any) => {
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
      response = handleApiError(err);
    });
  return response;
};

export default GetSpecificEmeraldListData;
