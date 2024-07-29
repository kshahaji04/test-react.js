import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from './error-handler';

export const UpdateDocStatusEmeraldChittiApi = async (
  token: any,
  docStatus: any,
  name: any
) => {
  let response: any;

  const params = `/api/resource/Emerald Chitti/${name}`;

  let body = {
    docstatus: docStatus,
  };

  const getHeaders = headerGenerator(token);

  await axios
    .put(`${BASE_URL}${params}`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export const UpdateDocStatusWithSubmittedEmeraldChittiApi = async (
  token: any,
  docStatus: any,
  submitted_date: any,
  name: any
) => {
  let response: any;

  const params = `/api/resource/Emerald Chitti/${name}`;

  let body = {
    docstatus: docStatus,
    submitted_date: submitted_date,
  };

  const getHeaders = headerGenerator(token);

  await axios
    .put(`${BASE_URL}${params}`, body, getHeaders)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};
