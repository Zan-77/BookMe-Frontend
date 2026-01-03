import { useEffect, useMemo, useState } from "react"
import { getBooking } from '../api/booking/getBooking';
import { useDispatch } from 'react-redux';
import { setUserBooking } from '../features/booking/bookingSlice';
import { v4 as uuidv4 } from 'uuid';
import SearchInput from "../components/Inputs/SearchInput"
import Button from "../components/Button"
import Card from "../components/Card";
import CalenderIcon from "../components/svg/CalenderIcon";
import ClockIcon from "../components/svg/ClockIcon";
import PinIcon from "../components/svg/PinIcon";
import extractDataByIdentifier from "../utilities/extractDataByIdentifier";
import { data, useSearchParams } from "react-router-dom";
import { ax } from "../api/config";
const Booking = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState("")
    const [filter, setFilter] = useState("all")
    const dispatch = useDispatch();
    const [myBookings, setMyBookings] = useState()

    const handleCancel = async(id)=>{
        try {
            const res = await ax.post(`/bookings/${id}/cancel/`)
            if(res.status ===200)
                window.location.reload();
            
        } catch (error) {
            console.error(error);
            
        }
    }

    const handleGetBooking = async () => {
        const res = await getBooking();
        setMyBookings(res);
        dispatch(setUserBooking(res));
    }
    useEffect(() => {
        handleGetBooking();
    }, [])

    if (!myBookings) return <div className="text-center mt-20">Loading your bookings...</div>;
    else
        return (
            <div>
                <div className=" m-8" >
                    <h1 className="text-2xl font-bold mb-1">My Bookings</h1>
                    <span className="text-light-text-muted dark:text-dark-text-muted">{myBookings.length} bookings total</span>
                </div>
                <div className="w-1/2 mx-auto *:mb-8">
                    <div className="mt-8 flex  mx-auto justify-between ">
                        <SearchInput
                            placeholder="Search bookings..."
                            hideButton={true}
                            className="w-60 font-light"
                            setSearchValue={setSearchValue}
                            searchValue={searchValue}
                        />
                        <div className="*:mx-2">
                            <Button onClick={() => { setFilter("all") }} variant="fill" color={filter === "all" ? "primary" : "accent"} >All</Button>
                            <Button onClick={() => { setFilter("booked") }} variant="fill" color={filter === "booked" ? "primary" : "accent"}>Booked</Button>
                            <Button onClick={() => { setFilter("cancelled") }} variant="fill" color={filter === "cancelled" ? "primary" : "accent"}>Cancelled</Button>
                            <Button onClick={() => { setFilter("completed") }} variant="fill" color={filter === "completed" ? "primary" : "accent"}>Completed</Button>
                        </div>
                    </div>
                    <div className="*:my-4">
                        {myBookings.filter((item) => {
                            const startdate = new Date(item.start)
                            const todaydate = new Date()

                            const diffInMs =  Math.abs( startdate - todaydate);
                            const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

                            if (searchParams.get("filter") == "today" && diffInDays == 0)
                                return true
                            else if (searchParams.get("filter") == "next" && diffInDays == 1)
                                //if ()
                                return true
                            else if (searchParams.get("filter") == "after" && diffInDays > 1 )
                                return true
                            else if (
                                searchParams.get("filter") == "all"
                            )
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
                                if (item.status === filter || filter === "all")
                                    if (item.service.title.toLowerCase().includes(searchValue.toLowerCase()))
                                        return (
                                            <Card key={uuidv4()} className="relative rounded-md transition-all hover:shadow-md/10">
                                                <div className="flex">
                                                    <img className="w-36 h-36 rounded-s-md" src={item.service.media[0]?.file} alt="no img" />
                                                    <div className="w-full p-4">
                                                        <div className="flex justify-between">
                                                            <h1 className={`text-lg`} font-medium>{item.service.title}</h1>
                                                            <div className={`border-2 border-light-light dark:border-dark-light p-1.5 rounded-md ${item.status === "completed" ? "text-ok bg-ok/20" : item.status === "cancelled" ? "text-error bg-error/20" : "text-light-text-muted dark:text-dark-text-muted bg-light-light/50 dark:bg-dark-light/50 "}`}>{item.status}</div>
                                                        </div>
                                                        <div className="flex my-2 *:mr-4 **:mx-1">
                                                            <spam className="flex text-light-text-muted dark:text-dark-text-muted"><CalenderIcon muted={true} />{date}</spam>
                                                            <spam className="flex text-light-text-muted dark:text-dark-text-muted"><ClockIcon muted={true} />{time} {`(${Math.floor(duration / (1000 * 60 * 60))}h)`}</spam>
                                                        </div>
                                                        <spam className="flex mx-1 *:mx-1 text-light-text-muted  dark:text-dark-text-muted"><PinIcon ratio="w-5! h-5!" />{extractDataByIdentifier(item.service.description, "location")}</spam>
                                                    </div>
                                                    <div className="absolute bottom-0 right-0">

                                                    {item.status=="booked"?<Button onClick={()=>{handleCancel(item.id)}} className=" w-fit ml-auto mb-4 mr-4">Cancel booking</Button>:""}
                                                    </div>
                                                </div>
                                            </Card>
                                        )
                            })
                        }
                    </div>
                </div>
            </div>
        )
}

export default Booking