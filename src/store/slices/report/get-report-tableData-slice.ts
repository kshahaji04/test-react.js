import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';

export const getReportTableData: any = createAsyncThunk(
  'getReport/getReportData',
  async (token: any) => {
    const getReportData: any = await token;

    return getReportData;
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

export const GetReportTableDataScreen = createSlice({
  name: 'getReport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReportTableData.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getReportTableData.fulfilled, (state, action) => {
      if (
        action?.payload?.status === 200 &&
        action?.payload?.data?.message?.status === 'success'
      ) {
        if (action?.payload?.data?.message?.hasOwnProperty('data')) {
          state.data = action?.payload?.data?.message?.data?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getReportTableData.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_report_table_data = (state: RootState) =>
  state.GetReportTableDataScreen;

export default GetReportTableDataScreen.reducer;
