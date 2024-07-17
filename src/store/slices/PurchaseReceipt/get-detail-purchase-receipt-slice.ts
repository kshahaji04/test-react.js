import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetDetailOfPurchaseReceiptApi from '../../../services/api/PurchaseReceipt/detail-of-puchase-receipt-api';

export const getDetailPurchaseReceipt: any = createAsyncThunk(
  'detailOfPurchaseReceipt/getDetailOfPurchaseReceipt',
  async (params: any) => {
    const detailOfPurchaseReceiptData: any =
      await GetDetailOfPurchaseReceiptApi(params);

    return detailOfPurchaseReceiptData;
  }
);

interface RepoDetailPRState {
  data: any;
  docStatus: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoDetailPRState = {
  data: '',
  docStatus: '',
  error: '',
  isLoading: 'idle',
};

export const GetDetailPurchaseReceiptScreen = createSlice({
  name: 'detailOfPurchaseReceipt',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailPurchaseReceipt.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
      state.docStatus = '';
    });
    builder.addCase(getDetailPurchaseReceipt.fulfilled, (state, action) => {
      if (action?.payload?.message?.status === 'success') {
        if (action?.payload?.message?.hasOwnProperty('data')) {
          if (action?.payload?.message?.data?.length > 0) {
            state.data = action?.payload?.message?.data;
            state.docStatus = action?.payload?.message?.data[0]?.docstatus;
            state.isLoading = 'succeeded';
          } else {
            state.isLoading = 'succeeded';
            state.data = '';
            state.docStatus = '';
          }
        }
      } else {
        state.isLoading = 'succeeded';
        state.data = '';
        state.docStatus = '';
      }
    });
    builder.addCase(getDetailPurchaseReceipt.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.docStatus = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_detail_purchase_receipt = (state: RootState) =>
  state.GetDetailPurchaseReceiptScreen;

export default GetDetailPurchaseReceiptScreen.reducer;
