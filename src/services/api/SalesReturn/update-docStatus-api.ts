import axios from 'axios';
import { BASE_URL } from '../../config/api-config';

export const UpdateSalesReturnDocStatusApi = async (
  token: any,
  name: any,
  docStatus: any
) => {
  let response: any;

  const params = `/api/resource/Sales Return/${name}`;

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

export const updateSalesReturnSubmitDocStatusApi = async (
  token: any,
  name: any,
  submitted_date: any,
  docStatus: any
) => {
  let response: any;

  const params = `/api/resource/Sales Return/${name}`;

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
      console.log(err);
    });
  return response;
};
