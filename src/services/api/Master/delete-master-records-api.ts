import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

export const deleteClientGroupApi = async (token: any, name: any) => {
  let response: any;

  const params = `/api/resource/Client Group/${name}`;

  const getHeaders = headerGenerator(token);

  await axios
    .delete(`${BASE_URL}${params}`, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const deleteClientApi = async (token: any, name: any) => {
  let response: any;

  const params = `/api/resource/Client Name/${name}`;

  const getHeaders = headerGenerator(token);

  await axios
    .delete(`${BASE_URL}${params}`, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const deleteCategoryApi = async (token: any, name: any) => {
  let response: any;

  const params = `/api/resource/Category/${name}`;

  const getHeaders = headerGenerator(token);

  await axios
    .delete(`${BASE_URL}${params}`, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const deleteSubCategoryApi = async (token: any, name: any) => {
  let response: any;

  const params = `/api/resource/Sub Category/${name}`;

  const getHeaders = headerGenerator(token);

  await axios
    .delete(`${BASE_URL}${params}`, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const deleteHuidProductApi = async (token: any, name: any) => {
  let response: any;

  const params = `/api/resource/HUID Product/${name}`;

  const getHeaders = headerGenerator(token);

  await axios
    .delete(`${BASE_URL}${params}`, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const deleteSupplierGroupApi = async (token: any, name: any) => {
  let response: any;

  const params = `/api/resource/Supplier Group/${name}`;

  const getHeaders = headerGenerator(token);

  await axios
    .delete(`${BASE_URL}${params}`, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const deleteSupplierApi = async (token: any, name: any) => {
  let response: any;

  const params = `/api/resource/Supplier/${name}`;

  const getHeaders = headerGenerator(token);

  await axios
    .delete(`${BASE_URL}${params}`, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};

export const deleteProjectSubcategoryMappingApi = async (
  token: any,
  name: any
) => {
  let response: any;

  const params = `/api/resource/Project Sub Category Mapping/${name}`;

  const getHeaders = headerGenerator(token);

  await axios
    .delete(`${BASE_URL}${params}`, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};
