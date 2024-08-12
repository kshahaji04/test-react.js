import { BASE_URL } from '../../config/api-config';
import { callPostAPI } from '../utils';

const AddSubCategoryApi: any = async (
  token: any,
  title: any,
  category: any
) => {
  let response: any;

  let body = {
    title: title,
    category: category,
    can_be_deleted: 1,
  };

  const url: any = `${BASE_URL}/api/resource/Sub Category`;

  response = await callPostAPI(url, body, token);
  return response;
};

export default AddSubCategoryApi;
