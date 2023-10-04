import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../root-reducer";
import GetProductListApi from "../../../services/api/Chitti/get-product-list-api";



export const getProductList:any = createAsyncThunk("productList/getProductList",async(token:any)=>{
    const ProductListData:any = await GetProductListApi(token)
    console.log("ProductListData res",ProductListData)
    return ProductListData;
});

interface RepoGetproductList {
    data: any;
    error: string;
    isLoading: "idle" | "pending" | "succeeded" | "failed";
  }
  
  const initialState: RepoGetproductList = {
    data: "",
    error: "",
    isLoading: "idle",
  };
  
  export const GetProductListScreen = createSlice({
    name: "productList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getProductList.pending, (state) => {
        state.isLoading = "pending";
        state.data = "";
      });
      builder.addCase(getProductList.fulfilled, (state, action) => {
        if(action?.payload?.message?.status === "success"){
            if(action?.payload?.message?.hasOwnProperty("data") ){
                state.data = action?.payload?.message?.data?.data;
                state.isLoading = "succeeded";
            }
        }
      });
      builder.addCase(getProductList.rejected, (state, action) => {
        state.isLoading = "failed";
        state.data = "";
        state.error = "failed to store data";
      });
    },
  });
  
  export const get_product_list = (state: RootState) =>
    state.GetProductListScreen;
  
  
  export default GetProductListScreen.reducer;