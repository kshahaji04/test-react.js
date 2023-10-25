import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const GetBlankExcelApi: any = async (request: any) => {
  console.log('tokennnn', request);
  let response: any;
  const version = 'v1';
  const method = 'download_blank_table_data';
  const entity = 'download_blank';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const config = {
    headers: {
      Authorization: request.token,
    },
  };

  await axios
    .get(`${BASE_URL}${params}`, config)
    .then((res: any) => {
      response = res;
    })
    .catch((err: any) => {
      console.log(err);
    });
  return response;
};

export default GetBlankExcelApi;