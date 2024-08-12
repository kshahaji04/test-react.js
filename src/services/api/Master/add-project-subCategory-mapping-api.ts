import { BASE_URL } from '../../config/api-config';
import { callPostAPI } from '../utils';

const AddProjectSubCategoryMappingApi: any = async (
  token: any,
  project: any,
  stone: any,
  plain: any
) => {
  let response: any;

  let body = {
    version: 'v1',
    method: 'create_project_mapping',
    entity: 'project_mapping_post',
    project: project,
    stone: stone,
    plain: plain,
    can_be_deleted: 1,
  };

  const url: any = `${BASE_URL}/api/method/challan.sdk.api`;

  response = await callPostAPI(url, body, token);
  return response;
};

export default AddProjectSubCategoryMappingApi;
