import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const UpdateCategoryApi: any = async (token: any, name: any, category: any) => {
  let response: any;
  const params = `/api/resource/Sub Category/${name}`;

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  };

  let body = {
    category: category,
  };

  await axios
    .put(`${BASE_URL}/${params}`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default UpdateCategoryApi;
