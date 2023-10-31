import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import getCategoryPartywiseReportApi from '../../../services/api/report/get-category-partywise-report-api';

export const getCategoryPartywiseReportData: any = createAsyncThunk(
  'getCategoryPartywiseReport/getCategoryPartywiseReports',
  async (params: any) => {
    const getCategoryPartywiseReportData: any =
      await getCategoryPartywiseReportApi(params);
    console.log(
      'getCategoryPartywiseReportData res',
      getCategoryPartywiseReportData
    );
    return getCategoryPartywiseReportData;
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

export const GetCategoryPartywiseReportScreen = createSlice({
  name: 'getCategoryPartywiseReport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryPartywiseReportData.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(
      getCategoryPartywiseReportData.fulfilled,
      (state, action) => {
        console.log('category partywie payload', action?.payload);
        if (
          action?.payload?.status === 200 &&
          action?.payload?.data?.message?.status === 'success'
        ) {
          state.data = action?.payload?.data?.message?.data;
          state.isLoading = 'succeeded';
        }
      }
    );
    builder.addCase(getCategoryPartywiseReportData.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_category_partywise_report_data = (state: RootState) =>
  state.GetCategoryPartywiseReportScreen;

export default GetCategoryPartywiseReportScreen.reducer;
