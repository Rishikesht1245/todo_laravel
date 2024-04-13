import { createSlice } from "@reduxjs/toolkit";


const initialState : {isAuth : boolean} = {isAuth : false};
const AuthSlice = createSlice({
    name : "Auth",
    initialState,
    reducers :{
        login : (state) => {
            state.isAuth = true;
            localStorage.setItem("isAuth", "true")
        },
        logout: (state) => {
            state.isAuth = false;
            localStorage.removeItem("isAuth")
        }
    }
});

export const {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer;
