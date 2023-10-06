import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../root-reducer";
import GetEmeraldList from "../../../services/api/Emerald/get-emerald-chitti-listing-api";
import GetProductItemList from "../../../services/api/Emerald/get-product-item-list-api";


export const getProductItem: any = createAsyncThunk("getProductItem/getProductItem", async (token: any) => {
    const getProductItemData: any = await GetProductItemList(token)
    console.log("getProductItemData res", getProductItemData)
    return getProductItemData;
});

interface RepoProductItemState {
    data: any;
    error: string;
    isLoading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: RepoProductItemState = {
    data: "",
    error: "",
    isLoading: "idle",
};

export const GetProductItemScreen = createSlice({
    name: "getProductItem",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductItem.pending, (state) => {
            state.isLoading = "pending";
            state.data = "";
        });
        builder.addCase(getProductItem.fulfilled, (state, action) => {
            if (action?.payload?.message?.status === "success") {
                if (action?.payload?.message?.hasOwnProperty("data")) {
                    state.data = action?.payload?.message?.data;
                    state.isLoading = "succeeded";
                }
            }
        });
        builder.addCase(getProductItem.rejected, (state, action) => {
            state.isLoading = "failed";
            state.data = "";
            state.error = "failed to store data";
        });
    },
});

export const get_product_item = (state: RootState) =>
    state.GetProductItemScreen;


export default GetProductItemScreen.reducer;