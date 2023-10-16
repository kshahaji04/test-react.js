import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const GetEmeraldSupplierDetail: any = async (request: any) => {
  console.log('tokennnn', request);
  let response: any;
  const version = 'v1';
  const method = 'get_emeralds';
  const entity = 'emerald_api';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${request.id}`;

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

export default GetEmeraldSupplierDetail;
