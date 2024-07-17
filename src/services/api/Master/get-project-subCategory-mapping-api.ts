import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const getProjectSubCategoryMappingApi: any = async (token: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_project_mapping';
  const entity = 'project_mapping';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default getProjectSubCategoryMappingApi;
