import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import getProjectSubCategoryMappingApi from '../../../services/api/Master/get-project-subCategory-mapping-api';

export const getProjectSubCategoryMapping: any = createAsyncThunk(
  'getProjectSubCategoryMapping/getProjectSubCategoryMappinglist',
  async (token: any) => {
    const projectSubCategoryMappingData: any =
      await getProjectSubCategoryMappingApi(token);
    console.log(
      'projectSubCategoryMappingData res',
      projectSubCategoryMappingData
    );
    return projectSubCategoryMappingData;
  }
);

interface RepoProjectSubCategoryMapping {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoProjectSubCategoryMapping = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetProjectSubCategoryMappingScreen = createSlice({
  name: 'getProjectSubCategoryMapping',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjectSubCategoryMapping.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getProjectSubCategoryMapping.fulfilled, (state, action) => {
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
    builder.addCase(getProjectSubCategoryMapping.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_project_sub_category_mapping = (state: RootState) =>
  state.GetProjectSubCategoryMappingScreen;

export default GetProjectSubCategoryMappingScreen.reducer;
