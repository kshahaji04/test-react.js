import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetEmeraldShilpiListApi from '../../../services/api/emrald-shilpi-api.ts/get-emerald-shilpi-list-api';
import GetEmeraldShilpiDetailsApi from '../../../services/api/emrald-shilpi-api.ts/get-emerald-shilpi-details-api';

export const getEmeraldShilpiDetails: any = createAsyncThunk(
  'getEmeraldshilpiDetails/getEmeraldShilpiDetails',
  async (token: any) => {
    const EmeraldShilpiDetailsData: any =
      await GetEmeraldShilpiDetailsApi(token);
    console.log(
      'EmeraldShilpiData res',
      EmeraldShilpiDetailsData?.data?.message
    );
    return EmeraldShilpiDetailsData;
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

export const GetEmeraldShilpiDetailsScreen = createSlice({
  name: 'getEmeraldshilpiDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmeraldShilpiDetails.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getEmeraldShilpiDetails.fulfilled, (state, action) => {
      if (action?.payload?.data?.message?.status === 'success') {
        console.log('payload', action?.payload?.data?.message);
        state.data = action?.payload?.data?.message?.data?.data;
        state.isLoading = 'succeeded';
      }
    });
    builder.addCase(getEmeraldShilpiDetails.rejected, (state, action) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_Emerald_shilpi_details = (state: RootState) =>
  state.GetEmeraldShilpiDetailsScreen;

export default GetEmeraldShilpiDetailsScreen.reducer;
