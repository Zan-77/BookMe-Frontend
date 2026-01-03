import { useEffect, useState } from 'react'
import { getBooking } from '../api/booking/getBooking';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { setUserBooking } from '../features/booking/bookingSlice';
import Card from '../components/Card';
import { data } from 'react-router';
import Button from '../components/Button';
import CalenderIcon from '../components/svg/CalenderIcon';
import ClockIcon from '../components/svg/ClockIcon';
import PinIcon from '../components/svg/PinIcon';
import extractDataByIdentifier from '../utilities/extractDataByIdentifier';
const Home = () => {
  const dispatch = useDispatch();
  const [myBookings, setMyBookings] = useState()


  const handleGetBooking = async () => {
    const res = await getBooking();
    dispatch(setUserBooking(res));
    setMyBookings(res);
  }
  useEffect(() => { handleGetBooking(); }, [])
  if (myBookings)
    return (
      <div className='mt-6'>
        <div className=" m-8" >
          <h1 className="text-3xl font-bold mb-1">Welcome back!</h1>
          <span className="text-light-text-muted text-lg dark:text-dark-text-muted"> Here's an overview of your bookings and schedule.</span>
          <div className='my-8 mx-4'>
            <span className=" text-lg font-semibold">You have today</span>
            <div className='grid grid-cols-3 *:mb-4 mx-4 gap-2'>
              {myBookings.filter((item) => {
                const startdate = new Date(item.start)
                const todaydate = new Date()
                const diffInMs = Math.abs(startdate - todaydate);
                const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
                if ( diffInDays == 0 && item.status =="booked")
                  return true
              })
                .map((item ,idx) => {
                  const itemDate = new Date(item.start)
                  const itemEndDate = new Date(item.end)
                  const duration = Math.abs(itemEndDate - itemDate);

                  const date = itemDate.toLocaleDateString("en-Cv", {
                    month: "short",
                    day: "2-digit",
                    year: "2-digit"
                  }).toString()
                  const time = itemDate.toLocaleTimeString("en-Cv", {
                    hour: "2-digit",
                    minute: "2-digit"
                  }).toString()
                  if(idx<3)
                      return (
                        <Card key={uuidv4()} className="w-full rounded-md transition-all hover:shadow-md/10">
                          <div className="flex">
                            <img className="w-30 h-full rounded-s-md" src={item.service.media[0]?.file} alt="no img" />
                            <div className="w-full p-4">
                              <div className="flex justify-between">
                                <h1 className={`text-lg`} font-medium>{item.service.title}</h1>
                                <div className={`border-2 border-light-light dark:border-dark-light p-1.5 rounded-md ${item.status === "completed" ? "text-ok bg-ok/20" : item.status === "cancelled" ? "text-error bg-error/20" : "text-light-text-muted dark:text-dark-text-muted bg-light-light/50 dark:bg-dark-light/50 "}`}>{item.status}</div>
                              </div>
                              <div className=" my-2 *:mr-4 **:mx-1">
                                <spam className="flex text-light-text-muted dark:text-dark-text-muted"><CalenderIcon muted={true} />{date}</spam>
                                <spam className="flex text-light-text-muted dark:text-dark-text-muted"><ClockIcon muted={true} />{time} {`(${Math.floor(duration / (1000 * 60 * 60))}h)`}</spam>
                              </div>
                            </div>
                          </div>
                        </Card>
                      )
                })
              }            </div>
            <div className='ml-4'>
              <Button to="/user/bookings?filter=today" variant="text" color="accent" className="">See All</Button>
            </div>
          </div>
          <div className='my-8 mx-4'>
            <span className=" text-lg font-semibold">You have after today</span>
            <div className='grid grid-cols-3 *:mb-4 mx-4 gap-2'>
              {myBookings.filter((item) => {
                const startdate = new Date(item.start)
                const todaydate = new Date()

                const diffInMs = Math.abs(startdate - todaydate);
                const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

                if ( diffInDays > 0 && item.status =="booked")
                  return true

              })
                .map((item) => {
                  const itemDate = new Date(item.start)
                  const itemEndDate = new Date(item.end)
                  const duration = Math.abs(itemEndDate - itemDate);

                  const date = itemDate.toLocaleDateString("en-Cv", {
                    month: "short",
                    day: "2-digit",
                    year: "2-digit"
                  }).toString()
                  const time = itemDate.toLocaleTimeString("en-Cv", {
                    hour: "2-digit",
                    minute: "2-digit"
                  }).toString()
                
                      return (
                        <Card key={uuidv4()} className="rounded-md transition-all hover:shadow-md/10">
                          <div className="flex">
                            <img className="w-30 h-full rounded-s-md" src={item.service.media[0]?.file} alt="no img" />
                            <div className="w-full p-4">
                              <div className="flex justify-between">
                                <h1 className={`text-lg`} font-medium>{item.service.title}</h1>
                                <div className={`border-2 border-light-light dark:border-dark-light p-1.5 rounded-md ${item.status === "completed" ? "text-ok bg-ok/20" : item.status === "cancelled" ? "text-error bg-error/20" : "text-light-text-muted dark:text-dark-text-muted bg-light-light/50 dark:bg-dark-light/50 "}`}>{item.status}</div>
                              </div>
                              <div className=" my-2 *:mr-4 **:mx-1">
                                <spam className="flex text-light-text-muted dark:text-dark-text-muted"><CalenderIcon muted={true} />{date}</spam>
                                <spam className="flex text-light-text-muted dark:text-dark-text-muted"><ClockIcon muted={true} />{time} {`(${Math.floor(duration / (1000 * 60 * 60))}h)`}</spam>
                              </div>
                            </div>
                          </div>
                        </Card>
                      )
                })

              }            </div>
            <div className='ml-4'>
              <Button to="/user/bookings?filter=today" variant="text" color="accent" className="">See All</Button>
            </div>
          </div>
        </div>

      </div >
    )
}

export default Home