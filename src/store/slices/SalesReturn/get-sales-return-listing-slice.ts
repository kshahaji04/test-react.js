import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GetSalesReturnListingApi from '../../../services/api/SalesReturn/get-sales-return-listing-api';
import { RootState } from '../../root-reducer';

export const getSalesReturnListing: any = createAsyncThunk(
  'salesReturnListing/getSalesReturnListing',
  async (token: any) => {
    const salesReturnData: any = await GetSalesReturnListingApi(token);
    console.log('salesReturnData  data', salesReturnData);
    return salesReturnData;
  }
);

interface RepoSRstate {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoSRstate = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetSalesReturnListingScreen = createSlice({
  name: 'salesReturnListing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSalesReturnListing.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getSalesReturnListing.fulfilled, (state, action) => {
      if (action?.payload?.data?.message?.status === 'success') {
        state.data = action?.payload?.data?.message?.data;
        state.isLoading = 'succeeded';
      }
    });
    builder.addCase(getSalesReturnListing.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_sales_return_listing = (state: RootState) =>
  state.GetSalesReturnListingScreen;

export default GetSalesReturnListingScreen.reducer;
