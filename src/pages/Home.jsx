import React, { useEffect, useState } from 'react'
import { getBooking } from '../api/booking/getBooking';
import { useDispatch } from 'react-redux';
import { setUserBooking } from '../features/booking/bookingSlice';
const Home = () => {
  const dispatch = useDispatch();
  const [myBookings ,setMyBookings]=useState()


  const handleGetBooking = async()=>{
    const res =await getBooking();
    dispatch(setUserBooking(res))    
    setMyBookings(res.data)
  }
  useEffect(()=>{handleGetBooking();} ,[])
  return (
    <div>Home</div>
  )
}

export default Home