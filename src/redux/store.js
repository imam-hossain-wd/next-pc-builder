// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './features/user/userSlice';
// import pcBuilderReducer from './features/pcBuilder/pcbuilderSlice'
// export const store = configureStore({
//   reducer: {
//     user: userReducer,
//     pcBuilder: pcBuilderReducer,
//   },
// })


import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/pcBuilder/pcbuilderSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from './features/user/userSlice';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, pcBuilderReducer);

const store = configureStore({
  reducer: {
    user: userReducer,
    pcBuilder: persistedReducer,
  },
});

export const persistor = persistStore(store);

export default store;
