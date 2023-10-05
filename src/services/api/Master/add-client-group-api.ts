import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const AddClientGroupApi: any = async (token:any,title:any) => {

  let response: any;

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  };

  let body = {
    title: title,
  };

  await axios
    .post(`${BASE_URL}/api/resource/Client Group`, body, config)
    .then((res: any) => {
      console.log('create chitti res', res);
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default AddClientGroupApi;
