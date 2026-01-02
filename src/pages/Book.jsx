import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getAvailability } from "../api/services/getAvailability";
import { v4 as uuidv4 } from 'uuid';
import { postBooking } from "../api/booking/postBooking";
import Input from "../components/Input"
import Card from "../components/Card";
import Calender from "../components/Calender";
import Button from "../components/Button";
import NextIcon from "../components/svg/nextIcon";
import Rating from "../components/Rating";
import extractDataByIdentifier from "../utilities/extractDataByIdentifier";
import Dropdown from "../components/Dropdown"
const Book = () => {
  const urlParam = useParams();
  const service = useSelector(state => state.services.servicesDetail.find((item) => item.id == urlParam.id));
  const [today, setToday] = useState()
  const [time, setTime] = useState()
  const [StartTime, setStartTime] = useState()
  const navigate = useNavigate();

  const [calenderStartvalue, setCalenderStartvalue] = useState(new Date());
  const [openCalender, setOpenCalender] = useState(false);
  const [openTime, setOpenTime] = useState(false);


  const { control, getValues, handleSubmit } = useForm(
    {
      defaultValues: { first: "", last: "", phone: "", email: "" },
      mode: "all"
    }
  );
  const handleAvailability = async () => {

    const res = await getAvailability(urlParam.id, calenderStartvalue.toLocaleDateString('en-CA'))
    setToday(res)

  }
  useEffect(() => {
    handleAvailability();
  }, [calenderStartvalue])

  useEffect(() => {
    
  }, [today, service])
  const handleBooking = async () => {
    const data = {
      "service_id": urlParam.id,
      "start": StartTime,
      "quantity": 1,
      "notes": `firstNAme ${getValues("first")} lastName ${getValues("last")} phone ${getValues("phone")} email ${getValues("email")} `
    }
    try {
      const res = await postBooking(data);
      if (res.status === 201)
        navigate("/")
    } catch (error) {
      console.error(error);
    }

  }


  if (service && today)
    return (
      <div className="flex flex-col w-full mx-4 mt-6">
        <div className="flex mx-auto">
          <div className="flex flex-col">
            <Card className="p-4 h-fit rounded-md w-2xl mx-2">
              <h1 className="text-lg font-medium mb-4">Guest Info</h1>
              <p>Guest names must match the valid ID which will be used at check-in.</p>
              <form id="noteForm" className="flex flex-col *:mx-4 *:mb-4 mt-6 bg-inherit">
                <div className="flex *:mx-4 *:w-1/2 bg-inherit">
                  <Input id="first" label="First Name" name="first" control={control} rules={{ required: { message: "Required", value: true } }} />
                  <Input id="last" label="Last Name" name="last" control={control} rules={{ required: { message: "Required", value: true } }} />
                </div>
                <div className="flex *:mx-4 *:w-1/2  bg-inherit">
                  <Input id="email" label="Email" name="email" control={control} rules={{ required: { message: "Required", value: true } }} />
                  <Input id="phone" label="Phone" name="phone" control={control} rules={{ required: { message: "Required", value: true } }} />
                </div>
              </form>
            </Card>
            <Card className="p-4 h-fit rounded-md w-2xl mx-2 my-4.5 *:my-1.5">
              <span>By submitting this booking, I acknowledge that I have read and agree to Trip.com's Terms of Use and Privacy Statement.</span>
              <Button onClick={() => { handleBooking() }} variant="fill" disabled={today.data.slots.length === 0}>Reserve</Button>
            </Card>
          </div>
          <div className="flex flex-col">
            <Card className="p-4 h-fit rounded-md w-fit mx-2">
              <div className="flex ">
                <img src={service?.media?.[0]?.file} className="h-28 w-24 rounded-sm object-cover" alt="no Img" />
                <div className="flex flex-col *:mx-4">
                  <div className="flex items-center h-fit ">
                    <h1 className="text-lg font-medium mr-1">{service?.title}</h1>
                    <Rating number={extractDataByIdentifier(service?.description, "star")} />
                  </div>
                  <div className="flex *:my-4 *:mr-2 justify-between  ">
                    <span className="bg-indigo-500 dark:bg-indigo-900 py-0.5 px-1 rounded-xs">8.6/10</span>
                    <span>523 reviews</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card id="reserve" className="relative p-4 mx-2 mt-4 rounded-md  ">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <span>{calenderStartvalue.toDateString()}</span>
                  <span>{today.data.slots.length === 0 ? <span className="text-error/90">No Spots Available</span> : time}</span>
                </div>
                <div className="border-b-2 border-light-border dark:border-dark-light mb-2 mt-4" />
                <div className="flex justify-between">
                  <div className="relative">
                    <Button variant="text" color="accent" onClick={() => { setOpenCalender(!openCalender) }} endIcon={<NextIcon rotate={openCalender ? "rotate-90" : "rotate-270"} />} >Pick a date</Button>
                    <div className={(openCalender ? "" : "hidden") + " " + "absolute z-30 flex top-11 right-0 stroke-dark-text-dark dark:stroke-dark-text-dark "} onMouseLeave={() => { setOpenCalender(false) }}>
                      <Calender onClickDay={() => { setOpenCalender(false) }} value={calenderStartvalue} setValue={setCalenderStartvalue} />
                    </div>
                  </div>
                  <div className="relative">
                    <Button disabled={today.data.slots.length === 0 ? true : false} onClick={() => { setOpenTime(!openTime) }} variant="text" color="accent" endIcon={<NextIcon rotate={openTime ? "rotate-90" : "rotate-270"} />}>Pick a time</Button>
                    <Dropdown className="*:my-1 p-1 rounded-md" position="left-0" drop={openTime}
                      dropItems={today.data?.slots?.map((item) => {
                        const startDate = new Date(item.start)
                        const endDate = new Date(item.end)
                        return (
                          <Button key={uuidv4()} onClick={() => { setStartTime(item.start); return setTime(`${startDate.getHours() - 1} PM to ${endDate.getHours() - 1} PM`) }} variant="text" color="accent">{startDate.getHours() - 1} PM to {endDate.getHours() - 1} PM</Button>
                        )
                      })} />
                  </div>
                </div>
              </div>
            </Card>
            <Card className="relative p-4 mx-2 mt-4 rounded-md">
              <h1 className="font-medium mb-4">Price Details</h1>
              <div className="flex justify-between">
                <span>
                  one slote
                </span>
                <span className="*:ml-1">{service?.price_cents}<span>$</span></span>
              </div>
              <div className="border-b-2 border-dashed border-light-border dark:border-dark-light mb-2 my-4" />
              <div className="flex justify-between pb-8">
                <span>Total</span>
                <span className="*:ml-1">{service?.price_cents}<span>$</span></span>
              </div>
            </Card>
          </div>
        </div>
      </div>

    )
}

export default Book