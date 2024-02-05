import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

const AddClientNameApi: any = async (
  token: any,
  title: any,
  clientGroup: any
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
    client_group: clientGroup,
  };

  await axios
    .post(`${BASE_URL}/api/resource/Client Name`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default AddClientNameApi;
