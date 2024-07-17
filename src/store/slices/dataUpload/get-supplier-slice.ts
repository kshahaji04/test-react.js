import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';

import GetSupplierList from '../../../services/api/dataUpload/get-supplier-api';

export const getSupplierList: any = createAsyncThunk(
  'getSupplier/getSupplierList',
  async (token: any) => {
    const getSupplierData: any = await GetSupplierList(token);

    return getSupplierData;
  }
);

interface RepoSupplierListState {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoSupplierListState = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetSupplierListScreen = createSlice({
  name: 'getSupplier',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSupplierList.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getSupplierList.fulfilled, (state, action) => {
      if (action?.payload?.status === 200) {
        if (action?.payload?.data?.hasOwnProperty('data')) {
          state.data = action?.payload?.data?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getSupplierList.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_supplier_list = (state: RootState) =>
  state.GetSupplierListScreen;

export default GetSupplierListScreen.reducer;
