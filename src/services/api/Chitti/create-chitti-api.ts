import axios from "axios";
import { BASE_URL } from "../../Config/api-config";

const CreateChittiApi = async (request:any) => {
  console.log("create chitti req",request.challanTableData)
  console.log("create chitti req na",request.narrationTableData)
  let response: any;
  // const params = `/api/resource/Challan`;

  let body = {
    "client_name":request.clientName,
    "gold_rate":request.goldRate,
    "remarks":request.remarks,
    "challan_table":request.challanTableData,
    "narration_huid":request.narrationTableData
  }

  const config = {
    headers: {
      Authorization: request.token
    }
  };
console.log("body",body)
  
await axios.post(`${BASE_URL}/api/resource/Challan`,body,config)
.then((res:any)=>{
  console.log("create chitti res",res)
  response = res
}).catch((err:any)=>{
  console.log(err)
})
return response
};

export default CreateChittiApi;