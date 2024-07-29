import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetBlankExcelApi: any = async (request: any) => {
  const version = 'v1';
  const method = 'download_blank_table_data';
  const entity = 'download_blank';

  const url: any = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const response = await callGetAPI(url, request.token);
  return response;
};

export default GetBlankExcelApi;
