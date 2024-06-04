import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GetDetailOfSalesReturnApi from '../../../services/api/SalesReturn/detail-of-sales-return-api';
import { RootState } from '../../root-reducer';

export const getDetailSalesReturn: any = createAsyncThunk(
  'detailOfSalesReturn/getDetailOfSalesReturn',
  async (params: any) => {
    const detailOfSalesReturnData: any =
      await GetDetailOfSalesReturnApi(params);
    // console.log('detailOfSalesReturnData res', detailOfSalesReturnData);
    return detailOfSalesReturnData;
  }
);

interface RepoDetailSRState {
  data: any;
  docStatus: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoDetailSRState = {
  data: '',
  docStatus: '',
  error: '',
  isLoading: 'idle',
};

export const GetDetailSalesReturnScreen = createSlice({
  name: 'detailOfSalesReturn',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailSalesReturn.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
      state.docStatus = '';
    });
    builder.addCase(getDetailSalesReturn.fulfilled, (state, action) => {
      // console.log('first', action?.payload?.message);
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
    builder.addCase(getDetailSalesReturn.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.docStatus = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_detail_sales_return = (state: RootState) =>
  state.GetDetailSalesReturnScreen;

export default GetDetailSalesReturnScreen.reducer;
