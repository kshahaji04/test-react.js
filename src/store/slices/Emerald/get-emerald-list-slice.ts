import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetEmeraldList from '../../../services/api/Emerald/get-emerald-chitti-listing-api';

export const getEmeraldChallan: any = createAsyncThunk(
  'challanEmerald/getChallanEmerald',
  async (token: any) => {
    const EmeraldChallanData: any = await GetEmeraldList(token);
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

export const GetEmeraldChallanScreen = createSlice({
  name: 'challanEmerald',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmeraldChallan.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getEmeraldChallan.fulfilled, (state, action) => {
      if (action?.payload?.message?.status === 'success') {
        if (action?.payload?.message?.hasOwnProperty('data')) {
          state.data = action?.payload?.message?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getEmeraldChallan.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_Emerald_challan = (state: RootState) =>
  state.GetEmeraldChallanScreen;

export default GetEmeraldChallanScreen.reducer;
