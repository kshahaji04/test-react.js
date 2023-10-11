import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetEmeraldDetail from '../../../services/api/dataUpload/get-emerald-detail-api';

export const getEmeraldTableData: any = createAsyncThunk(
  'emeraldTableData/getEmeraldTableData',
  async (params: any) => {
    const EmeraldTableData: any = await GetEmeraldDetail(params);
    console.log('EmeraldChallanData res', EmeraldTableData);
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
        Object.keys(action?.payload?.data)?.length > 0
      ) {
        state.data = action?.payload?.data?.data;
        state.isLoading = 'succeeded';
      }
    });
    builder.addCase(getEmeraldTableData.rejected, (state, action) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_Emerald_detail = (state: RootState) =>
  state.GetEmeraldTableDataScreen;

export default GetEmeraldTableDataScreen.reducer;
