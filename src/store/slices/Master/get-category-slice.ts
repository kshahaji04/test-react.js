import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';

import getCategoryApi from '../../../services/api/Master/get-category-api';

export const getCategoryList: any = createAsyncThunk(
  'getCategoryList/getCategoryList',
  async (token: any) => {
    const CategoryListData: any = await getCategoryApi(token);

    return CategoryListData;
  }
);

interface RepoGetSubcategoryList {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoGetSubcategoryList = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetCategoryListScreen = createSlice({
  name: 'getSubCategoryList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryList.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getCategoryList.fulfilled, (state, action) => {
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
    builder.addCase(getCategoryList.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_category_list = (state: RootState) =>
  state.GetCategoryListScreen;

export default GetCategoryListScreen.reducer;
