import { combineReducers } from '@reduxjs/toolkit';
import GetAccessTokenReducer from './slices/auth/token-login-slice';
import GetChittiChallanReducer from './slices/Chitti/get-chitti-challan-list-slice';
import GetSpecificChittiChallanReducer from './slices/Chitti/get-specific-chitti-listing-data-slice';
import GetClientNameReducer from './slices/Chitti/get-client-name-slice';
import GetClientGroupReducer from './slices/Chitti/get-client-group-list-slice';
import GetSubCategoryListReducer from './slices/Chitti/get-subcategory-slice';
import GetProductListReducer from './slices/Chitti/get-product-list-slice';
import GetEmeraldChallanReducer from './slices/Emerald/get-emerald-list-slice';
import GetCategoryListReducer from './slices/Master/get-category-slice';
const appReducer = combineReducers({
  GetAccessTokenScreen: GetAccessTokenReducer,
  GetChittiChallanScreen: GetChittiChallanReducer,
  GetSpecificChittiChallanScreen: GetSpecificChittiChallanReducer,
  GetClientNameScreen: GetClientNameReducer,
  GetSubCategoryListScreen: GetSubCategoryListReducer,
  GetProductListScreen: GetProductListReducer,
  GetClientGroupScreen: GetClientGroupReducer,
  GetEmeraldChallanScreen:GetEmeraldChallanReducer,
  GetCategoryListScreen:GetCategoryListReducer
});

const rootReducer = (state: any, action: any) => {
  console.log('navbar rootreducer');
  if (action.type === 'getAccessToken/logoutUser') {
    state = undefined;

    state = {} as RootState;
  }

  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;
