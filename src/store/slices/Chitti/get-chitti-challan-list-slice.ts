import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetChallanList from '../../../services/api/Chitti/get-chitti-challan-listing';

export const getChittiChallan: any = createAsyncThunk(
  'challanChitti/getChallanChitti',
  async (token: any) => {
    const ChittiChallanData: any = await GetChallanList(token);

    return ChittiChallanData;
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

export const GetChittiChallanScreen = createSlice({
  name: 'challanChitti',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChittiChallan.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getChittiChallan.fulfilled, (state, action) => {
      if (action?.payload?.message?.status === 'success') {
        if (action?.payload?.message?.hasOwnProperty('data')) {
          state.data = action?.payload?.message?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getChittiChallan.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_chitti_challan = (state: RootState) =>
  state.GetChittiChallanScreen;

export default GetChittiChallanScreen.reducer;
