import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

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
    can_be_deleted: 1
  };

  await axios
    .post(`${BASE_URL}/api/resource/Client Name`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default AddClientNameApi;
