import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../root-reducer";
import GetChallanList from "../../../services/api/Chitti/get-chitti-challan-listing";
import GetSpecificChallanListData from "../../../services/api/Chitti/get-specific-chitti-listing-api";

export const getSpecificChittiChallan:any = createAsyncThunk("specificChallan/getSpecificChallanChitti",async(params:any)=>{
    const SpecificChittiChallanData:any = await GetSpecificChallanListData(params)
    console.log("ChittiChallanDataspecific res",SpecificChittiChallanData)
    return SpecificChittiChallanData;
});

interface RepoSpecificChallanState {
    data: any;
    error: string;
    isLoading: "idle" | "pending" | "succeeded" | "failed";
  }
  
  const initialState: RepoSpecificChallanState = {
    data: "",
    error: "",
    isLoading: "idle",
  };
  
  export const GetSpecificChittiChallanScreen = createSlice({
    name: "specificChallan",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getSpecificChittiChallan.pending, (state) => {
        state.isLoading = "pending";
        state.data = "";
      });
      builder.addCase(getSpecificChittiChallan.fulfilled, (state, action) => {
        if(action?.payload?.message?.status === "success"){
            if(action?.payload?.message?.hasOwnProperty("data") ){
                if(action?.payload?.message?.data?.data?.length > 0){
                    state.data = action?.payload?.message?.data?.data;
                    state.isLoading = "succeeded";
                }
            }
        }else{
            state.data = "";

        }
      });
      builder.addCase(getSpecificChittiChallan.rejected, (state, action) => {
        state.isLoading = "failed";
        state.data = "";
        state.error = "failed to store data";
      });
    },
  });
  
  export const get_specific_chitti_challan = (state: RootState) =>
    state.GetSpecificChittiChallanScreen;
  
  
  export default GetSpecificChittiChallanScreen.reducer;