import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import getCategorySummaryReportApi from '../../../services/api/report/get-category-summary-report-api';

export const getCategorySummaryReportData: any = createAsyncThunk(
  'getCategorySummaryReport/getCategorySummaryReports',
  async (token: any) => {
    const getSubCategoryReportData: any =
      await getCategorySummaryReportApi(token);
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

export const GetCategorySummaryReportScreen = createSlice({
  name: 'getCategorySummaryReport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategorySummaryReportData.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getCategorySummaryReportData.fulfilled, (state, action) => {
      if (
        action?.payload?.status === 200 &&
        action?.payload?.data?.message?.status === 'success'
      ) {
        state.data = action?.payload?.data?.message?.data;
        state.isLoading = 'succeeded';
      }
    });
    builder.addCase(getCategorySummaryReportData.rejected, (state, action) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_category_summary_report_data = (state: RootState) =>
  state.GetCategorySummaryReportScreen;

export default GetCategorySummaryReportScreen.reducer;
