import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../root-reducer";
import GetEmeraldList from "../../../services/api/Emerald/get-emerald-chitti-listing-api";


export const getEmeraldTableData: any = createAsyncThunk("emeraldTableData/getEmeraldTableData", async (token: any) => {
    const EmeraldTableData: any = await GetEmeraldList(token)
    console.log("EmeraldChallanData res", EmeraldTableData)
    return EmeraldTableData;
});

interface RepoAccessTokenState {
    data: any;
    error: string;
    isLoading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: RepoAccessTokenState = {
    data: "",
    error: "",
    isLoading: "idle",
};

export const GetEmeraldTableDataScreen = createSlice({
    name: "emeraldTableData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEmeraldTableData.pending, (state) => {
            state.isLoading = "pending";
            state.data = "";
        });
        builder.addCase(getEmeraldTableData.fulfilled, (state, action) => {
            if (action?.payload?.message?.status === "success") {
                if (action?.payload?.message?.hasOwnProperty("data")) {
                    state.data = action?.payload?.message?.data;
                    state.isLoading = "succeeded";
                }
            }
        });
        builder.addCase(getEmeraldTableData.rejected, (state, action) => {
            state.isLoading = "failed";
            state.data = "";
            state.error = "failed to store data";
        });
    },
});

export const get_Emerald_table_data = (state: RootState) =>
    state.GetEmeraldTableDataScreen;


export default GetEmeraldTableDataScreen.reducer;