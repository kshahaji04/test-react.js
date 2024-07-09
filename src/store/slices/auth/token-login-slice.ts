import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GetTokenLoginApi from '../../../services/api/auth/access-token-api';
import { RootState } from '../../root-reducer';
import getUserRoleApi from '../../../services/api/general/user-role-api';

export const getAccessToken: any = createAsyncThunk(
  'accessToken/getAccessToken',
  async (param: any) => {
    const AccessTokenData: any = await GetTokenLoginApi(param);
    return AccessTokenData;
  }
);

export const getUserRolesPermission = createAsyncThunk(
  'accessToken/getUserRolesPermission',
  async (token: any) => {
    const response = await getUserRoleApi(token);
    return response;
  }
);

interface RepoAccessTokenState {
  token: any;
  username: any;
  userRoles: any;
  error: string;
  isLoading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: RepoAccessTokenState = {
  token: '',
  username: '',
  userRoles: [],
  error: '',
  isLoading: 'idle',
};

export const GetAccessTokenScreen = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    ClearToken(state?: any) {
      state.token = '';
      state.username = '';
      state.error = '';
      state.isLoading = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccessToken.pending, (state) => {
      state.isLoading = 'pending';
      state.token = '';
      state.username = '';
      state.userRoles = [];
    });
    builder.addCase(getAccessToken.fulfilled, (state, action) => {
      if (action?.payload?.msg === 'success') {
        if (action?.payload?.hasOwnProperty('data')) {
          state.token = action?.payload?.data?.access_token;
          state.username = action?.payload?.data?.username;
        }
      }
    });
    builder.addCase(getUserRolesPermission.fulfilled, (state, action) => {
      console.log('actionss', action.payload);
      if (action?.payload?.data?.message?.status === 'success') {
        state.userRoles = action?.payload?.data.message?.data;
      }
    });
    builder.addCase(getAccessToken.rejected, (state) => {
      state.isLoading = 'failed';
      state.token = '';
      state.username = '';
      state.userRoles = '';
      state.error = 'failed to store token';
    });
  },
});

export const get_access_token = (state: RootState) =>
  state.GetAccessTokenScreen;
export const { ClearToken }: any = GetAccessTokenScreen.actions;

export default GetAccessTokenScreen.reducer;
