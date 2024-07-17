import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetSubCategoryListApi from '../../../services/api/Chitti/get-subcategory-list';

export const getSubCategoryList: any = createAsyncThunk(
  'getSubCategoryList/getSubCategoryList',
  async (token: any) => {
    const subcategoryListData: any = await GetSubCategoryListApi(token);

    return subcategoryListData;
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

export const GetSubCategoryListScreen = createSlice({
  name: 'getSubCategoryList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubCategoryList.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getSubCategoryList.fulfilled, (state, action) => {
      if (action?.payload?.message?.status === 'success') {
        if (action?.payload?.message?.hasOwnProperty('data')) {
          state.data = action?.payload?.message?.data?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getSubCategoryList.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_subcategory_list: any = (state: RootState) =>
  state.GetSubCategoryListScreen;

export default GetSubCategoryListScreen.reducer;
