import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetEmeraldShilpiListApi from '../../../services/api/emrald-shilpi/get-emerald-shilpi-list-api';

export const getEmeraldShilpiList: any = createAsyncThunk(
  'getEmeraldshilpi/getEmeraldShilpiList',
  async (token: any) => {
    const EmeraldChallanData: any = await GetEmeraldShilpiListApi(token);
    console.log('EmeraldChallanData res', EmeraldChallanData);
    return EmeraldChallanData;
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

export const GetEmeraldShilpiListScreen = createSlice({
  name: 'getEmeraldshilpi',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmeraldShilpiList.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getEmeraldShilpiList.fulfilled, (state, action) => {
      if (action?.payload?.data?.message?.status === 'success') {
        if (action?.payload?.data?.message?.hasOwnProperty('data')) {
          state.data = action?.payload?.data?.message?.data?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getEmeraldShilpiList.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_Emerald_shilpi_list = (state: RootState) =>
  state.GetEmeraldShilpiListScreen;

export default GetEmeraldShilpiListScreen.reducer;
