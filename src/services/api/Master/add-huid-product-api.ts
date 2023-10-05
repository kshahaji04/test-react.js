import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const AddHuidProductApi: any = async (token: any, title: any) => {

    let response: any;

    const config = {
        headers: {
            Accept: 'application/json',
            Authorization: token,
        },
    };

    let body = {
        title: title,
    };

    await axios
        .post(`${BASE_URL}/api/resource/HUID Product`, body, config)
        .then((res: any) => {

            response = res;
        })
        .catch((err: any) => {
            console.log(err);
        });
    return response;
};

export default AddHuidProductApi;
