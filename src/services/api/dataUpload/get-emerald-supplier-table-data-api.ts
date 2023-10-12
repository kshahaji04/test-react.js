import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const DownloadEmeraldSupplierTableData: any = async (
  token: any,
  supplierName: any
) => {
  let response: any;

  const version = 'v1';
  const method = 'download_emerald_table_data';
  const entity = 'download';

  const params = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&name=${supplierName}`;

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

export default DownloadEmeraldSupplierTableData;
