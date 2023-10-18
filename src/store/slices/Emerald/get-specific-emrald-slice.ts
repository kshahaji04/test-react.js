import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetSpecificEmeraldListData from '../../../services/api/Emerald/get-specific-emerald-chitti-api';

export const getSpecificEmeraldChitti: any = createAsyncThunk(
  'specificChallan/getSpecificChallanChitti',
  async (params: any) => {
    const SpecificChittiChallanData: any =
      await GetSpecificEmeraldListData(params);
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

export const GetSpecificEmeraldScreen = createSlice({
  name: 'specificChallan',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpecificEmeraldChitti.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getSpecificEmeraldChitti.fulfilled, (state, action) => {
      if (action?.payload?.message?.status === 'success') {
        if (action?.payload?.message?.hasOwnProperty('data')) {
          if (action?.payload?.message?.data?.data?.length > 0) {
            state.data = action?.payload?.message?.data?.data;
            state.docStatus =
              action?.payload?.message?.data?.data[0]?.docstatus;
            state.isLoading = 'succeeded';
          }
        }
      } else {
        state.data = '';
        state.docStatus = '';
      }
    });
    builder.addCase(getSpecificEmeraldChitti.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.docStatus = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_specific_emerald_chitti = (state: RootState) =>
  state.GetSpecificEmeraldScreen;

export default GetSpecificEmeraldScreen.reducer;
