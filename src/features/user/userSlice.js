import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        islogged:false
    },
    reducers:{
        setIsLogged:(state ,action) =>{
            state.islogged = action.payload;
        }
    }
})

export const {setIsLogged } = userSlice.actions

export default userSlice.reducer