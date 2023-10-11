import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const GetEmeraldDetail: any = async (request: any) => {
  console.log('tokennnn', request);
  let response: any;

  const params = `/api/resource/Emerald/${request.id}`;

  const config = {
    headers: {
      Authorization: request.token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default GetEmeraldDetail;
