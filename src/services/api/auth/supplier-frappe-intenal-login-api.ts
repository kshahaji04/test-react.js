import axios from 'axios';
import { BASE_URL } from '../../Config/api-config';

const InternalLoginApi: any = async (token: any) => {
  let response: any;

  //   const params: any = `/api/method/login`;
  //   const config = {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   };

  //   let body = {
  //     usr: 'Administrator',
  //     pwd: 'Erp@123',
  //   };
  //   await axios
  //     .post(`${BASE_URL}${params}`, body)
  //     .then((res: any) => {
  //       response = res;
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //     });

  //   return response;
  // };

  fetch('https://shilpijewels.8848digitalerp.com/api/method/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      usr: 'Administrator',
      pwd: 'Erp@123',
    }),
  })
    .then((r) => {
      r.json();
      console.log('res', r);
      window.open(
        'https://shilpijewels.8848digitalerp.com/app/emerald-supplier/new-emerald-supplier-1'
      );
    })
    .then((r) => {
      console.log(r);
    });
};
export default InternalLoginApi;
