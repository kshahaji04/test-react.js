import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import getSubCategoryReportApi from '../../../services/api/report/get-sub-category-report-api';

export const getSubCategoryReportData: any = createAsyncThunk(
  'getSubCategoryReport/getSubCategoryReportData',
  async (params: any) => {
    const getSubCategoryReportData: any = await getSubCategoryReportApi(params);
    console.log('getSubCategoryReportData res', getSubCategoryReportData);
    return getSubCategoryReportData;
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

export const GetSubCategoryReportScreen = createSlice({
  name: 'getSubCategoryReport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubCategoryReportData.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getSubCategoryReportData.fulfilled, (state, action) => {
      if (
        action?.payload?.status === 200 &&
        action?.payload?.data?.message?.status === 'success'
      ) {
        state.data = action?.payload?.data?.message?.data;
        state.isLoading = 'succeeded';
      }
    });
    builder.addCase(getSubCategoryReportData.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_subcategory_report_data = (state: RootState) =>
  state.GetSubCategoryReportScreen;

export default GetSubCategoryReportScreen.reducer;
