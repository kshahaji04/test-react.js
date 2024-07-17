import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import getEmeraldReportApi from '../../../services/api/report/get-emerald-report-api';

export const getEmeraldReportData: any = createAsyncThunk(
  'getEmeraldReport/getEmeraldReports',
  async (params: any) => {
    const getEmeraldReportData: any = await getEmeraldReportApi(params);

    return getEmeraldReportData;
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

export const GetEmeraldReportScreen = createSlice({
  name: 'getEmeraldReport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmeraldReportData.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getEmeraldReportData.fulfilled, (state, action) => {
      if (
        action?.payload?.status === 200 &&
        action?.payload?.data?.message?.status === 'Success'
      ) {
        state.data = action?.payload?.data?.message?.data;
        state.isLoading = 'succeeded';
      }
    });
    builder.addCase(getEmeraldReportData.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_emerald_report_data = (state: RootState) =>
  state.GetEmeraldReportScreen;

export default GetEmeraldReportScreen.reducer;
