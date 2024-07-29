import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const AddClientGroupApi: any = async (token: any, title: any) => {
  let response: any;

  const getHeaders = headerGenerator(token);

  let body = {
    title: title,
    can_be_deleted: 1,
  };

  await axios
    .post(`${BASE_URL}/api/resource/Client Group`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default AddClientGroupApi;
