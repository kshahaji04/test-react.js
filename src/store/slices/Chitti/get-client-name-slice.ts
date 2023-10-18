import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetClientNameList from '../../../services/api/Chitti/get-client-name';

export const getClientName: any = createAsyncThunk(
  'clientName/getClientName',
  async (token: any) => {
    const ClientNameListData: any = await GetClientNameList(token);
    console.log('ChittiChallanData res', ClientNameListData);
    return ClientNameListData;
  }
);

interface RepoAccessTokenState {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoAccessTokenState = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetClientNameScreen = createSlice({
  name: 'clientName',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClientName.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getClientName.fulfilled, (state, action) => {
      if (action?.payload?.message?.status === 'success') {
        if (action?.payload?.message?.hasOwnProperty('data')) {
          state.data = action?.payload?.message?.data?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getClientName.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_client_name = (state: RootState) => state.GetClientNameScreen;

export default GetClientNameScreen.reducer;
