import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import getSupplierNameAndSupplierGrpApi from '../../../services/api/Master/get-supplier-with-supplier-group-api';

export const getsupplierAndSupplierGroup: any = createAsyncThunk(
  'getSuplierAndSupplierGroup/getSupplierAndGroup',
  async (token: any) => {
    const supplierData: any = await getSupplierNameAndSupplierGrpApi(token);

    return supplierData;
  }
);

interface RepoGetSupplierAndSupplierGroupList {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoGetSupplierAndSupplierGroupList = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetSupplierAndSupplierGroupScreen = createSlice({
  name: 'getSuplierAndSupplierGroup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getsupplierAndSupplierGroup.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getsupplierAndSupplierGroup.fulfilled, (state, action) => {
      if (
        action?.payload?.status === 200 &&
        action?.payload?.data?.message?.status === 'success'
      ) {
        if (action?.payload?.data?.message?.hasOwnProperty('data')) {
          state.data = action?.payload?.data?.message?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getsupplierAndSupplierGroup.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_supplier_name_supplier_group = (state: RootState) =>
  state.GetSupplierAndSupplierGroupScreen;

export default GetSupplierAndSupplierGroupScreen.reducer;
