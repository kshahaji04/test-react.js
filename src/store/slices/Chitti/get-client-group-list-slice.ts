import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';
import GetClientGroupList from '../../../services/api/Chitti/get-client-group';

export const getClientGroupList: any = createAsyncThunk(
  'clientGroup/getClientGroup',
  async (token: any) => {
    const ClientGroupListData: any = await GetClientGroupList(token);

    return ClientGroupListData;
  }
);

interface RepoClientGroupState {
  data: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoClientGroupState = {
  data: '',
  error: '',
  isLoading: 'idle',
};

export const GetClientGroupScreen = createSlice({
  name: 'clientGroup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClientGroupList.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getClientGroupList.fulfilled, (state, action) => {
      if (action?.payload?.message?.status === 'success') {
        if (action?.payload?.message?.hasOwnProperty('data')) {
          state.data = action?.payload?.message?.data?.data;
          state.isLoading = 'succeeded';
        }
      }
    });
    builder.addCase(getClientGroupList.rejected, (state) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_client_group = (state: RootState) =>
  state.GetClientGroupScreen;

export default GetClientGroupScreen.reducer;
