import { combineReducers } from "@reduxjs/toolkit";
import GetAccessTokenReducer from './slices/auth/token-login-slice';
import GetChittiChallanReducer from './slices/Chitti/get-chitti-challan-list-slice';
const appReducer = combineReducers({
    GetAccessTokenScreen:GetAccessTokenReducer,
    GetChittiChallanScreen:GetChittiChallanReducer
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


