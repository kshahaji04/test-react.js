import { BASE_URL } from '../../config/api-config';
import { callPostAPI } from '../utils';

const AddClientNameApi: any = async (
  token: any,
  title: any,
  clientGroup: any
) => {
  let response: any;

  let body = {
    title: title,
    client_group: clientGroup,
    can_be_deleted: 1,
  };

  const url: any = `${BASE_URL}/api/resource/Client Name`;

  response = await callPostAPI(url, body, token);
  return response;
};

export default AddClientNameApi;
