import { BASE_URL } from '../../config/api-config';
import { callPostAPI } from '../utils';

const AddClientGroupApi: any = async (token: any, title: any) => {
  let response: any;

  let body = {
    title: title,
    can_be_deleted: 1,
  };

  const url: any = `${BASE_URL}/api/resource/Client Group`;

  response = await callPostAPI(url, body, token);
  return response;
};

export default AddClientGroupApi;
