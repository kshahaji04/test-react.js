import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const UpdateCategoryApi: any = async (token: any, name: any, category: any) => {
  let response: any;
  const params = `/api/resource/Sub Category/${name}`;

  const getHeaders = headerGenerator(token);

  let body = {
    category: category,
  };

  await axios
    .put(`${BASE_URL}/${params}`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default UpdateCategoryApi;
