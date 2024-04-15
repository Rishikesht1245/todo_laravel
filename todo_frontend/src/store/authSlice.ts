import { createSlice } from "@reduxjs/toolkit";
import { removeLocalData, saveLocally } from "../utils/localstorage";
import { IUser } from "../interfaces/auth";


const initialState : {isAuth : boolean, user:IUser | null} = {isAuth : false, user:null};
const AuthSlice = createSlice({
    name : "Auth",
    initialState,
    reducers :{
        login : (state,action) => {
            state.isAuth = true;
            state.user = action.payload
            saveLocally("isAuth", true);
            saveLocally("user", action.payload)
        },
        logout: (state) => {
            state.isAuth = false;
            state.user = null;
            removeLocalData();
        }
    }
});

export const {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer;
