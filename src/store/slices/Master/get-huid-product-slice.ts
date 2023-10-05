import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../root-reducer";
import GetSubCategoryListApi from "../../../services/api/Chitti/get-subcategory-list";
import getCategoryApi from "../../../services/api/Master/get-category-api";



export const getHuidProductList: any = createAsyncThunk("getHuidProductList/getHuidList", async (token: any) => {
    const huidProudctListData: any = await getCategoryApi(token)
    console.log("huidProudctListData res", huidProudctListData)
    return huidProudctListData;
});

interface RepoGetHuidProductList {
    data: any;
    error: string;
    isLoading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: RepoGetHuidProductList = {
    data: "",
    error: "",
    isLoading: "idle",
};

export const GetHuidProductListScreen = createSlice({
    name: "getHuidProductList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHuidProductList.pending, (state) => {
            state.isLoading = "pending";
            state.data = "";
        });
        builder.addCase(getHuidProductList.fulfilled, (state, action) => {

            if (action?.payload?.status === 200 && action?.payload?.data?.message?.status === "success") {
                if (action?.payload?.data?.message?.hasOwnProperty("data")) {
                    state.data = action?.payload?.data?.message?.data?.data;
                    state.isLoading = "succeeded";
                }
            }
        });
        builder.addCase(getHuidProductList.rejected, (state, action) => {
            state.isLoading = "failed";
            state.data = "";
            state.error = "failed to store data";
        });
    },
});

export const get_huid_product_list = (state: RootState) =>
    state.GetHuidProductListScreen;


export default GetHuidProductListScreen.reducer;