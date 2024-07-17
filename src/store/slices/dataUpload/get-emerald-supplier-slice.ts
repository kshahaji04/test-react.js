import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';

import GetEmeraldSupplier from '../../../services/api/dataUpload/get-emerald-supplier-api';

export const getEmeraldSupplier: any = createAsyncThunk(
  'getEmeraldSupplier/getEmeraldSupplier',
  async (token: any) => {
    const getSupplierData: any = await GetEmeraldSupplier(token);

    return getSupplierData;
  }
);

interface RepoEmeraldSupplierState {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoEmeraldSupplierState = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetEmeraldSupplierScreen = createSlice({
  name: 'getSupplier',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmeraldSupplier.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getEmeraldSupplier.fulfilled, (state, action) => {
      if (action?.payload?.status === 200) {
        if (action?.payload?.data?.message?.status === 'success') {
          state.data = action?.payload?.data?.message?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getEmeraldSupplier.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_emerald_supplier = (state: RootState) =>
  state.GetEmeraldSupplierScreen;

export default GetEmeraldSupplierScreen.reducer;
