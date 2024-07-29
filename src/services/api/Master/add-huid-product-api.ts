import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const AddHuidProductApi: any = async (token: any, request: any) => {
  let response: any;

  const getHeaders = headerGenerator(token);

  let body = {
    title: request.title,
    custom_hm_pcs: request.hm_pcs,
    can_be_deleted: 1,
  };

  await axios
    .post(`${BASE_URL}/api/resource/HUID Product`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default AddHuidProductApi;
