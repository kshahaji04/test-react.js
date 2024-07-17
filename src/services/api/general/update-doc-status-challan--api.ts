import axios from 'axios';
import { BASE_URL } from '../../config/api-config';
import { handleApiError } from './error-handler';

export const UpdateDocStatusChallanApi: any = async (
  token: any,
  docStatus: any,
  name: any
) => {
  let response: any;

  const params = `/api/resource/Challan/${name}`;

  let body = {
    docstatus: docStatus,
  };

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .put(`${BASE_URL}${params}`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export const UpdateDocStatusWithSubmittedChallanApi = async (
  token: any,
  docStatus: any,
  submitted_date: any,
  name: any
) => {
  let response: any;

  const params = `/api/resource/Challan/${name}`;

  let body = {
    docstatus: docStatus,
    submitted_date: submitted_date,
  };

  const config = {
    headers: {
      Authorization: token,
    },
  };

  await axios
    .put(`${BASE_URL}${params}`, body, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      response = handleApiError(err);
    });
  return response;
};
