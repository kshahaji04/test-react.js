import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const AddSubCategoryApi: any = async (
  token: any,
  title: any,
  category: any
) => {
  let response: any;

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  };

  let body = {
    title: title,
    category: category,
  };

  await axios
    .post(`${BASE_URL}/api/resource/Sub Category`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default AddSubCategoryApi;
