import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import ReduxThunk from "redux-thunk";
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export const store = configureStore({
    reducer: persistedReducer,
    // devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  })
   
const persistor = persistStore(store);
export default store
export { persistor }
