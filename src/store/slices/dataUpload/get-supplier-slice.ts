import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../root-reducer";
import GetChallanList from "../../../services/api/Chitti/get-chitti-challan-listing";
import GetSupplierList from "../../../services/api/dataUpload/get-supplier-api";

export const getSupplierList: any = createAsyncThunk("getSupplier/getSupplierList", async (token: any) => {
  const getSupplierData: any = await GetSupplierList(token)
  console.log("getSupplierData res", getSupplierData)
  return getSupplierData;
});

interface RepoSupplierListState {
  data: any;
  error: string;
  isLoading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: RepoSupplierListState = {
  data: "",
  error: "",
  isLoading: "idle",
};

export const GetSupplierListScreen = createSlice({
  name: "getSupplier",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSupplierList.pending, (state) => {
      state.isLoading = "pending";
      state.data = "";
    });
    builder.addCase(getSupplierList.fulfilled, (state, action) => {
      if (action?.payload?.message?.status === "success") {
        if (action?.payload?.message?.hasOwnProperty("data")) {
          state.data = action?.payload?.message?.data;
          state.isLoading = "succeeded";
        }
      }
    });
    builder.addCase(getSupplierList.rejected, (state, action) => {
      state.isLoading = "failed";
      state.data = "";
      state.error = "failed to store data";
    });
  },
});

export const get_supplier_list = (state: RootState) =>
  state.GetSupplierListScreen;


export default GetSupplierListScreen.reducer;