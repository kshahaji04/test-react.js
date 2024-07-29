import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

export const UpdatePurchaseReceiptDocStatusApi = async (
  token: any,
  name: any,
  docStatus: any
) => {
  let response: any;

  const params = `/api/resource/Custom Purchase Receipt/${name}`;

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
      response = handleApiError(err);
    });
  return response;
};

export const updatePurchaseReceiptSubmitDocStatusApi = async (
  token: any,
  name: any,
  submitted_date: any,
  docStatus: any
) => {
  let response: any;

  const params = `/api/resource/Custom Purchase Receipt/${name}`;

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
