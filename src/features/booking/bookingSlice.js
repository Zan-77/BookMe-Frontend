import { createSlice } from "@reduxjs/toolkit";



export const bookingSlice = createSlice({
    name:"booking",
    initialState:{
        userBooking:[],
    },
    reducers:{
        setUserBooking:(state,action)=>{
            state.userBooking = action.payload;
        }

    }
})


export const { setUserBooking} = bookingSlice.actions

export default bookingSlice.reducer