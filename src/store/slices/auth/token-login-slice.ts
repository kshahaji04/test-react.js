import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GetTokenLoginApi from '../../../services/api/auth/access-token-api';
import { RootState } from '../../root-reducer';

export const getAccessToken: any = createAsyncThunk(
  'accessToken/getAccessToken',
  async (param: any) => {
    const AccessTokenData: any = await GetTokenLoginApi(param);
    console.log('AccessTokenData res', AccessTokenData);
    return AccessTokenData;
  }
);

interface RepoAccessTokenState {
  token: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoAccessTokenState = {
  token: '',
  error: '',
  isLoading: 'idle',
};

export const GetAccessTokenScreen = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    ClearToken(state?: any) {
      state.token = '';
      state.error = '';
      state.isLoading = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccessToken.pending, (state) => {
      state.isLoading = 'pending';
      state.token = '';
    });
    builder.addCase(getAccessToken.fulfilled, (state, action) => {
      if (action?.payload?.msg === 'success') {
        if (action?.payload?.hasOwnProperty('data')) {
          state.token = action?.payload?.data?.access_token;
        }
      }
    });
    builder.addCase(getAccessToken.rejected, (state) => {
      state.isLoading = 'failed';
      state.token = '';
      state.error = 'failed to store token';
    });
  },
});

export const get_access_token = (state: RootState) =>
  state.GetAccessTokenScreen;
export const { ClearToken }: any = GetAccessTokenScreen.actions;

export default GetAccessTokenScreen.reducer;
