import { combineReducers } from "@reduxjs/toolkit";
const appReducer = combineReducers({

});

const rootReducer = (state: any, action: any) => {
    console.log("navbar rootreducer")
    if (action.type === 'loginScreen/logoutUser') {


        state = undefined

        state = {} as RootState
    }

    return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;


