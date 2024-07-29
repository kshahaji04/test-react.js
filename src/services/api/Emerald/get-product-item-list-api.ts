import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetProductItemList = async (token: any) => {
  let url: any = `${BASE_URL}/api/resource/Item`;

  const response = await callGetAPI(url, token);
  return response.data;
};

export default GetProductItemList;
