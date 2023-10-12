import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../root-reducer';

import getClientNameAndClientGrpApi from '../../../services/api/Master/get-clientname-with-clientgroup-api';

export const getClientNameClientGroup: any = createAsyncThunk(
  'getClientNameClientGroup/getClientName',
  async (token: any) => {
    const CategoryListData: any = await getClientNameAndClientGrpApi(token);
    console.log('ChittiChallanData res', CategoryListData);
    return CategoryListData;
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

export const GetClientNameClientGroupScreen = createSlice({
  name: 'getClientNameClientGroup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClientNameClientGroup.pending, (state) => {
      state.isLoading = 'pending';
      state.data = '';
    });
    builder.addCase(getClientNameClientGroup.fulfilled, (state, action) => {
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
    builder.addCase(getClientNameClientGroup.rejected, (state, action) => {
      state.isLoading = 'failed';
      state.data = '';
      state.error = 'failed to store data';
    });
  },
});

export const get_client_name_client_group = (state: RootState) =>
  state.GetClientNameClientGroupScreen;

export default GetClientNameClientGroupScreen.reducer;
