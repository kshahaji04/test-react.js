import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const AddHuidProductApi: any = async (token: any, request: any) => {
  let response: any;

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  };

  let body = {
    title: request.title,
    custom_hm_pcs: request.hm_pcs,
  };

  await axios
    .post(`${BASE_URL}/api/resource/HUID Product`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default AddHuidProductApi;
