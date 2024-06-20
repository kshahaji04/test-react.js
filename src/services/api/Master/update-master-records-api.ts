import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

export const updateClientGroupApi = async (
  token: any,
  name: string,
  title: string
) => {
  let response: any;

  let body = {
    version: 'v1',
    method: 'update_group',
    entity: 'client_group',
    name: name,
    title: title,
  };

  const getHeaders = headerGenerator(token);

  await axios
    .put(`${BASE_URL}/api/method/challan.sdk.api`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const updateClientApi = async (
  token: any,
  name: string,
  title: string,
  client_group: string
) => {
  let response: any;

  let body = {
    version: 'v1',
    method: 'update_client',
    entity: 'client_api',
    name: name,
    title: title,
    client_group: client_group,
  };

  const getHeaders = headerGenerator(token);

  await axios
    .put(`${BASE_URL}/api/method/challan.sdk.api`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const updateCategoryApi = async (
  token: any,
  name: string,
  title: string
) => {
  let response: any;

  let body = {
    version: 'v1',
    method: 'update_category',
    entity: 'category',
    name: name,
    title: title,
  };

  const getHeaders = headerGenerator(token);

  await axios
    .put(`${BASE_URL}/api/method/challan.sdk.api`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const updateSubCategoryApi = async (
  token: any,
  name: string,
  title: string,
  category: string
) => {
  let response: any;

  let body = {
    version: 'v1',
    method: 'update_subcategory',
    entity: 'sub_category',
    name: name,
    title: title,
    category: category,
  };

  const getHeaders = headerGenerator(token);

  await axios
    .put(`${BASE_URL}/api/method/challan.sdk.api`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const updateSupplierGroupApi = async (
  token: any,
  name: string,
  supplier_group: string
) => {
  let response: any;

  let body = {
    version: 'v1',
    method: 'update_supplier_group',
    entity: 'supplier_group_api',
    name: name,
    supplier_group: supplier_group,
  };

  const getHeaders = headerGenerator(token);

  await axios
    .put(`${BASE_URL}/api/method/challan.sdk.api`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const updateSupplierApi = async (
  token: any,
  name: string,
  title: string,
  supplier_group: string
) => {
  let response: any;

  let body = {
    version: 'v1',
    method: 'update_supplier_name_supplier_group',
    entity: 'post_supplier_name_supplier_group',
    name: name,
    supplier_name: title,
    supplier_group: supplier_group,
  };

  const getHeaders = headerGenerator(token);

  await axios
    .put(`${BASE_URL}/api/method/challan.sdk.api`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const updateHuidProductApi = async (
  token: any,
  name: string,
  title: string,
  custom_hm_pcs: string
) => {
  let response: any;

  let body = {
    version: 'v1',
    method: 'update_product',
    entity: 'product',
    name: name,
    title: title,
    custom_hm_pcs: custom_hm_pcs,
  };

  const getHeaders = headerGenerator(token);

  await axios
    .put(`${BASE_URL}/api/method/challan.sdk.api`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const updateProjectSubcategoryMappingApi = async (
  token: any,
  name: string,
  project: string,
  stone: string,
  plain: string
) => {
  let response: any;

  let body = {
    version: 'v1',
    method: 'update_project_mapping',
    entity: 'project_mapping',
    name: name,
    project: project,
    stone: stone,
    plain: plain,
  };

  const getHeaders = headerGenerator(token);

  await axios
    .put(`${BASE_URL}/api/method/challan.sdk.api`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};
