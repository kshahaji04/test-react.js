import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const getCategorySummaryReportApi: any = async (token: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_category_summary_report';
  const entity = 'category_summary';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}`;

  const config = {
    headers: {
      Authorization: token,
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

export default getCategorySummaryReportApi;
