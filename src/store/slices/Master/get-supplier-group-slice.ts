import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';

import getSupplierGroupApi from '../../../services/api/Master/get-supplier-group-api';

export const getSupplierGroupList: any = createAsyncThunk(
  'supplierGroup/getSupplierGroup',
  async (token: any) => {
    const supplierGroupData: any = await getSupplierGroupApi(token);
    console.log('supplierGroupData from api', supplierGroupData);
    return supplierGroupData;
  }
);

interface RepoSupplierGroupState {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoSupplierGroupState = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetSupplierGroupScreen = createSlice({
  name: 'supplierGroup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSupplierGroupList.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getSupplierGroupList.fulfilled, (state, action) => {
      if (action?.payload?.data?.message?.status === 'success') {
        if (action?.payload?.data?.message?.hasOwnProperty('data')) {
          state.data = action?.payload?.data?.message?.data?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getSupplierGroupList.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_supplier_group_data = (state: RootState) =>
  state.GetSupplierGroupScreen;

export default GetSupplierGroupScreen.reducer;
