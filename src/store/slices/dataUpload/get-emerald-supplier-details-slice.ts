import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetEmeraldSupplierDetail from '../../../services/api/dataUpload/get-emerald-supplier-detail-api';

export const getEmeraldSupplierDetails: any = createAsyncThunk(
  'getEmeraldSupplierDetails/getEmeraldSupplierDetail',
  async (token: any) => {
    const getEmeraldSupplierDetails: any =
      await GetEmeraldSupplierDetail(token);

    return getEmeraldSupplierDetails;
  }
);

interface RepoEmeraldSupplierDetailsState {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoEmeraldSupplierDetailsState = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetEmeraldSupplierDetailsScreen = createSlice({
  name: 'getEmeraldSupplierDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmeraldSupplierDetails.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getEmeraldSupplierDetails.fulfilled, (state, action) => {
      if (action?.payload?.status === 200) {
        if (action?.payload?.data?.message?.status === 'success') {
          state.data = action?.payload?.data?.message?.data?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getEmeraldSupplierDetails.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_emerald_supplier_details = (state: RootState) =>
  state.GetEmeraldSupplierDetailsScreen;

export default GetEmeraldSupplierDetailsScreen.reducer;
