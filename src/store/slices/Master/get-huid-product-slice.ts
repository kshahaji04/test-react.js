import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';

import getHuidProductApi from '../../../services/api/Master/get-huid-product-listing-api';

export const getHuidProductList: any = createAsyncThunk(
  'getHuidProductList/getHuidList',
  async (token: any) => {
    const huidProudctListData: any = await getHuidProductApi(token);
    console.log('huidProudctListData res', huidProudctListData);
    return huidProudctListData;
  }
);

interface RepoGetHuidProductList {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoGetHuidProductList = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetHuidProductListScreen = createSlice({
  name: 'getHuidProductList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHuidProductList.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getHuidProductList.fulfilled, (state, action) => {
      if (
        action?.payload?.status === 200 &&
        action?.payload?.data?.message?.status === 'success'
      ) {
        state.data = action?.payload?.data?.message?.data;
        state.isLoading = 'succeeded';
      }
    });
    builder.addCase(getHuidProductList.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_huid_product_list = (state: RootState) =>
  state.GetHuidProductListScreen;

export default GetHuidProductListScreen.reducer;
