import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const UpdateClientGroup: any = async (
  token: any,
  name: any,
  clientGroup: any
) => {
  let response: any;
  const params = `api/resource/Client Name/${name}`;

  const config = {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  };

  let body = {
    client_group: clientGroup,
  };

  await axios
    .put(`${BASE_URL}/${params}`, body, config)
    .then((res: any) => {
      console.log('resss', res);
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default UpdateClientGroup;
