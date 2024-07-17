import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GetPurchaseReceiptListingApi from '../../../services/api/PurchaseReceipt/get-purchase-receipt-listing-api';
import { RootState } from '../../root-reducer';

export const getPurchaseReceiptListing: any = createAsyncThunk(
  'purchaseReceiptListing/getPurchaseReceiptListing',
  async (token: any) => {
    const purchaseReceiptData: any = await GetPurchaseReceiptListingApi(token);

    return purchaseReceiptData;
  }
);

interface RepoPRstate {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoPRstate = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetPurchaseReceiptListingScreen = createSlice({
  name: 'purchaseReceiptListing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPurchaseReceiptListing.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getPurchaseReceiptListing.fulfilled, (state, action) => {
      if (action?.payload?.data?.message?.status === 'success') {
        state.data = action?.payload?.data?.message?.data;
        state.isLoading = 'succeeded';
      }
    });
    builder.addCase(getPurchaseReceiptListing.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_purchase_receipt_listing = (state: RootState) =>
  state.GetPurchaseReceiptListingScreen;

export default GetPurchaseReceiptListingScreen.reducer;
