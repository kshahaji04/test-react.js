import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const GetSupplierList = async (token: any) => {
  const url: any = `${BASE_URL}/api/resource/Supplier`;

  const response = await callGetAPI(url, token);
  return response.data;
};

export default GetSupplierList;
