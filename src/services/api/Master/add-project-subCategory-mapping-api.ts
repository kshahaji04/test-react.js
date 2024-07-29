import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const AddProjectSubCategoryMappingApi: any = async (
  token: any,
  project: any,
  stone: any,
  plain: any
) => {
  let response: any;

  const getHeaders = headerGenerator(token);

  let body = {
    version: 'v1',
    method: 'create_project_mapping',
    entity: 'project_mapping_post',
    project: project,
    stone: stone,
    plain: plain,
    can_be_deleted: 1,
  };

  await axios
    .post(`${BASE_URL}/api/method/challan.sdk.api`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export default AddProjectSubCategoryMappingApi;
