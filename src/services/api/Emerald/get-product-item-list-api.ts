import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const GetProductItemList = async (token: any) => {
  console.log('tokennnn', token);
  let response: any;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .get(`${BASE_URL}/api/resource/Item`, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default GetProductItemList;
