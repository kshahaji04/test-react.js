import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetEmeraldShilpiDetailsApi from '../../../services/api/emrald-shilpi/get-emerald-shilpi-details-api';

export const getEmeraldTableData: any = createAsyncThunk(
  'emeraldTableData/getEmeraldTableData',
  async (params: any) => {
    const EmeraldTableData: any = await GetEmeraldShilpiDetailsApi(params);

    return EmeraldTableData;
  }
);

interface RepoAccessTokenState {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoAccessTokenState = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetEmeraldTableDataScreen = createSlice({
  name: 'emeraldTableData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmeraldTableData.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getEmeraldTableData.fulfilled, (state, action) => {
      if (
        action?.payload?.status === 200 &&
        action?.payload?.data?.message?.status === 'success'
      ) {
        state.data = action?.payload?.data?.message?.data?.data;
        state.isLoading = 'succeeded';
      }
    });
    builder.addCase(getEmeraldTableData.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_Emerald_detail = (state: RootState) =>
  state.GetEmeraldTableDataScreen;

export default GetEmeraldTableDataScreen.reducer;
