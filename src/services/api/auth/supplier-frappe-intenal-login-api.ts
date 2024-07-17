import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const InternalLoginApi: any = async (token: any) => {
  let response: any;

  const params: any = `/api/method/frappe.auth.get_logged_user`;
  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .post(`${BASE_URL}${params}`, undefined, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });

  return response;
};

export default InternalLoginApi;
