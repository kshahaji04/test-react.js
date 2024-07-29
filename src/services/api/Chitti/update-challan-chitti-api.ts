import axios from 'axios';
import { BASE_URL, headerGenerator } from '../../config/api-config';
import { handleApiError } from '../general/error-handler';

const UpdateChittiApi = async (request: any) => {
  let response: any;

  const params = `/api/resource/Challan/${request.name}`;

  let body = {
    abb: request.date,
    client_name: request.clientName,
    gold_rate: request.goldRate,
    remarks: request.remarks,
    narration_huid: request.narrationTableData,
    challan_table: request.challanTableData,
  };

  const getHeaders = headerGenerator(request.token);

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

export default UpdateChittiApi;
