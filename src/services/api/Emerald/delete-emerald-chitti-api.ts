import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const DeleteEmeraldChittiApi = async (token: any, name: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_emerald_delete';
  const entity = 'delete_enerald_chitti';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${name}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .delete(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res.data;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default DeleteEmeraldChittiApi;
