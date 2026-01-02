import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import servicesSlice from "./features/services/servicesSlice"
import searchSlice from './features/search/searchSlice'
import  bookingSlice from './features/booking/bookingSlice'
export default configureStore({

    reducer: {
        user: userSlice,
        services: servicesSlice,
        search: searchSlice,
        booking:bookingSlice
    }
})