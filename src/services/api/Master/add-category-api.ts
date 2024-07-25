import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const AddCategoryApi: any = async (token: any, title: any) => {
  let response: any;

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  };

  let body = {
    title: title,
    can_be_deleted: 1
  };

  await axios
    .post(`${BASE_URL}/api/resource/Category`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default AddCategoryApi;
