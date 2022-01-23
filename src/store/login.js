import { createSlice } from "@reduxjs/toolkit";

const authIniState = {
    user:{},
    isLoggedIn:false,
    loginFailed:null,
}
const slice = createSlice({
    name:'auth',
    initialState:authIniState,
    reducers:{
        setLogin:(state,{payload})=>{
            state.user = payload;
            state.isLoggedIn = true;
        },
        onLoginFailed:(state,{payload})=>{
            state.loginFailed = true;
        }
    }
})

export const {setLogin,onLoginFailed} = slice.actions;
export default {auth} = slice.reducer