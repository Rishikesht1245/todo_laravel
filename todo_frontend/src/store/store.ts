import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import todoSlice from "./todoSlice";

const store = configureStore({
    reducer:{
        auth : authSlice,
        todo : todoSlice,
    }
});

export default store;

//  used as the type of state in our store , ReturnType is a function in ts which extracts the return type of store.getState
export type RootState = ReturnType<typeof store.getState>;
//  used as the type fo dispatch function
export type AppDispatch = typeof store.dispatch;