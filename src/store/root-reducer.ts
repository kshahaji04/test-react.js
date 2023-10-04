import { combineReducers } from "@reduxjs/toolkit";
import GetAccessTokenReducer from './slices/auth/token-login-slice';
import GetChittiChallanReducer from './slices/Chitti/get-chitti-challan-list-slice';
import GetClientNameReducer from './slices/Chitti/get-client-name-slice';
import GetSubCategoryListReducer from './slices/Chitti/get-subcategory-slice';
import GetProductListReducer from './slices/Chitti/get-product-list-slice';
const appReducer = combineReducers({
    GetAccessTokenScreen:GetAccessTokenReducer,
    GetChittiChallanScreen:GetChittiChallanReducer,
    GetClientNameScreen:GetClientNameReducer,
    GetSubCategoryListScreen:GetSubCategoryListReducer,
    GetProductListScreen:GetProductListReducer,
});

const rootReducer = (state: any, action: any) => {
    console.log("navbar rootreducer")
    if (action.type === 'getAccessToken/logoutUser') {


        state = undefined

        state = {} as RootState
    }

    return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;


