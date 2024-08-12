import { BASE_URL } from '../../config/api-config';
import { callPostAPI } from '../utils';

const AddHuidProductApi: any = async (token: any, request: any) => {
  let response: any;

  let body = {
    title: request.title,
    custom_hm_pcs: request.hm_pcs,
    can_be_deleted: 1,
  };

  const url: any = `${BASE_URL}/api/resource/HUID Product`;

  response = await callPostAPI(url, body, token);
  return response;
};

export default AddHuidProductApi;
