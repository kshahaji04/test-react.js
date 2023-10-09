import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const getSpecificCategoryApi: any = async (request: any) => {

  let response: any;
  const version = 'v1';
  const method = 'get_sub_category_category';
  const entity = 'sub_category_category';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${request.name}`;

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

export default getSpecificCategoryApi;
