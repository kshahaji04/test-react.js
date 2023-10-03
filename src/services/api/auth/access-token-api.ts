import axios from "axios";
import { BASE_URL } from "../../Config/api-config";

const GetTokenLoginApi: any = async (values: any) => {

  console.log("token req", values);
  const user:any = values.username;
  const password:any = encodeURIComponent(values.password);
  const version:any = "v1";
  const method:any = "get_access_token";
  const entity:any = "access_token";
  let response: any;
  
  const params:any = `/api/method/challan.sdk.api?version=${version}&method=${method}&entity=${entity}&usr=${user}&pwd=${password}`
  const config = {
    headers: {
      Accept: "application/json",
    },
  };


  await axios.post(`${BASE_URL}${params}`,undefined,config).then((res:any)=>{
    response = res?.data?.message;
  }).catch((err:any)=>{
    console.log(err)
  })

return response
};

export default GetTokenLoginApi;
