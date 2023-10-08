import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const GetEmeraldTableData: any = async (token: any) => {
    console.log('tokennnn', token);
    let response: any;
    // const version = 'v1';
    // const method = 'get_custom_challan';
    // const entity = 'challan_api';

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

export default GetEmeraldTableData;
