import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import getSubCategoryCategoryApi from '../../../services/api/Master/get-subcategory-category-api';

export const getSubCategoryCategory: any = createAsyncThunk(
  'getSubCategoryCategoryList/getSubCategory',
  async (token: any) => {
    const CategoryListData: any = await getSubCategoryCategoryApi(token);
    console.log('getSubCategoryCategoryApi res', CategoryListData);
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

export const GetSubCategoryCategoryScreen = createSlice({
  name: 'getSubCategoryCategoryList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubCategoryCategory.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getSubCategoryCategory.fulfilled, (state, action) => {
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
    builder.addCase(getSubCategoryCategory.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_subcategory_category = (state: RootState) =>
  state.GetSubCategoryCategoryScreen;

export default GetSubCategoryCategoryScreen.reducer;
