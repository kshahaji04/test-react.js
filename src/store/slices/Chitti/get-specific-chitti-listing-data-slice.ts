import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';

import GetSpecificChallanListData from '../../../services/api/Chitti/get-specific-chitti-listing-api';

export const getSpecificChittiChallan: any = createAsyncThunk(
  'specificChallan/getSpecificChallanChitti',
  async (params: any) => {
    const SpecificChittiChallanData: any =
      await GetSpecificChallanListData(params);
    console.log('ChittiChallanDataspecific res', SpecificChittiChallanData);
    return SpecificChittiChallanData;
  }
);

interface RepoSpecificChallanState {
  data: any;
  docStatus: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoSpecificChallanState = {
  data: '',
  docStatus: '',
  error: '',
  isLoading: 'idle',
};

export const GetSpecificChittiChallanScreen = createSlice({
  name: 'specificChallan',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpecificChittiChallan.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
      state.docStatus = '';
    });
    builder.addCase(getSpecificChittiChallan.fulfilled, (state, action) => {
      console.log('first', action?.payload?.message?.data?.data);
      if (action?.payload?.message?.status === 'success') {
        if (action?.payload?.message?.hasOwnProperty('data')) {
          if (action?.payload?.message?.data?.data?.length > 0) {
            state.data = action?.payload?.message?.data?.data;
            state.docStatus =
              action?.payload?.message?.data?.data[0]?.docstatus;
            state.isLoading = 'succeeded';
          } else {
            state.isLoading = 'succeeded';
            state.data = '';
            state.docStatus = '';
          }
        }
      } else {
        state.isLoading = 'succeeded';
        state.data = '';
        state.docStatus = '';
      }
    });
    builder.addCase(getSpecificChittiChallan.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.docStatus = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_specific_chitti_challan = (state: RootState) =>
  state.GetSpecificChittiChallanScreen;

export default GetSpecificChittiChallanScreen.reducer;
