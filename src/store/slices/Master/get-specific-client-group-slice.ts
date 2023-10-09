import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../root-reducer";

import getSpecificClientGroupApi from "../../../services/api/Master/get-specific-client-group-api";



export const getSpecificClientGroup: any = createAsyncThunk("getSpecificClientGroup/getSpecificClient", async (params: any) => {
    const getSpecificClientGroupData: any = await getSpecificClientGroupApi(params)
    console.log("getSpecificClientGroupData res", getSpecificClientGroupData)
    return getSpecificClientGroupData;
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
        builder.addCase(getSpecificClientGroup.pending, (state) => {
            state.isLoading = "pending";
            state.data = "";
        });
        builder.addCase(getSpecificClientGroup.fulfilled, (state, action) => {

            if (action?.payload?.status === 200 && action?.payload?.data?.message?.status === "success") {
                if (action?.payload?.data?.message?.hasOwnProperty("data")) {
                    state.data = action?.payload?.data?.message?.data?.data[0].client_group;
                    state.isLoading = "succeeded";
                }
            }
        });
        builder.addCase(getSpecificClientGroup.rejected, (state, action) => {
            state.isLoading = "failed";
            state.data = "";
            state.error = "failed to store data";
        });
    },
});

export const get_specific_client_group
 = (state: RootState) =>
    state.GetSpecificClientGroupScreen;


export default GetHuidProductListScreen.reducer;