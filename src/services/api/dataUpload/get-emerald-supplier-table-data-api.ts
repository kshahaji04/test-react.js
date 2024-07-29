import { BASE_URL } from '../../config/api-config';
import { callGetAPI } from '../utils';

const DownloadEmeraldSupplierTableData: any = async (
  token: any,
  supplierName: any
) => {
  const version = 'v1';
  const method = 'download_emerald_table_data';
  const entity = 'download';

  const url = `${BASE_URL}/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${supplierName}`;

  const response = await callGetAPI(url, token);
  return response;
};

export default DownloadEmeraldSupplierTableData;
