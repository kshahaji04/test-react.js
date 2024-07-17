import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const GetEmeraldShilpiListApi = async (token: any) => {
  let response: any;

  const version = 'v1';
  const method = 'get_emerald_shilpi_list';
  const entity = 'emerald_shilpi_list';

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
      response = handleApiError(err);
    });
  return response;
};

export default GetEmeraldShilpiListApi;
