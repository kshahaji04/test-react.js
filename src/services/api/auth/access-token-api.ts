import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const GetTokenLoginApi: any = async (values: any) => {
  const user: any = values.username;
  const password: any = encodeURIComponent(values.password);
  const version: any = 'v1';
  const method: any = 'get_access_token';
  const entity: any = 'access_token';
  let response: any;

  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const keyToUse = user?.includes('@') ? 'usr' : 'username';

  const params: any = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&${keyToUse}=${user}&pwd=${password}`;

  try {
    const res = await axios.post(`${BASE_URL}${params}`, undefined, config);
    response = res?.data?.message;
  } catch (err) {
    response = handleApiError(err);
  }

  return response;
};

export default GetTokenLoginApi;
