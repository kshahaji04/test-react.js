import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const getSubCategoryCategoryApi: any = async (token: any) => {
  let response: any;
  const version = 'v1';
  const method = 'get_subcategory_category';
  const entity = 'subcategory_category';

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

export default getSubCategoryCategoryApi;
