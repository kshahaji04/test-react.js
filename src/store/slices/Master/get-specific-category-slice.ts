import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import getSpecificCategoryApi from '../../../services/api/Master/get-specific-category-api';

export const getSpecificCategory: any = createAsyncThunk(
  'getSpecificCategory/getSpecificCategory',
  async (params: any) => {
    const getSpecificCategoryData: any = await getSpecificCategoryApi(params);
    console.log('getSpecificClientGroupData res', getSpecificCategoryData);
    return getSpecificCategoryData;
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

export const GetSpecificCategoryScreen = createSlice({
  name: 'getSpecificCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpecificCategory.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getSpecificCategory.fulfilled, (state, action) => {
      if (
        action?.payload?.status === 200 &&
        action?.payload?.data?.message?.status === 'success'
      ) {
        if (action?.payload?.data?.message?.hasOwnProperty('data')) {
          state.data = action?.payload?.data?.message?.data?.data[0].category;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getSpecificCategory.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_specific_category = (state: RootState) =>
  state.GetSpecificCategoryScreen;

export default GetSpecificCategoryScreen.reducer;
