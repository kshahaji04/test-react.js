import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const UpdateClientGroup: any = async (
  token: any,
  name: any,
  clientGroup: any
) => {
  let response: any;
  const params = `api/resource/Client Name/${name}`;

  const getHeaders = headerGenerator(token);

  let body = {
    client_group: clientGroup,
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

export default UpdateClientGroup;
