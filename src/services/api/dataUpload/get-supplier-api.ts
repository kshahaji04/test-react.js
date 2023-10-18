import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const GetSupplierList = async (token: any) => {
  console.log('tokennnn', token);
  let response: any;

  const params = `/api/resource/Supplier`;

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

export default GetSupplierList;
