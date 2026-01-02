import {useParams } from "react-router";
import { v4 as uuidv4 } from 'uuid';
import Card from "../components/Card";
import PinIcon from "../components/svg/PinIcon"
import Button from "../components/Button";
import extractDataByIdentifier from "../utilities/extractDataByIdentifier";
import TrainIcon from "../components/svg/TrainIcon";
import PlainIcon from "../components/svg/PlainIcon";
import Rating from "../components/Rating";
import { useSelector } from "react-redux";




const Agency = () => {
  const urlParam = useParams();  
  const service = useSelector(state=>state.services.servicesDetail.find((item)=>item.id  == urlParam.id)); 


  if (service)
    return (
      <div className="flex flex-col *:mb-12">
        <Card className=" w-full p-2 mt-8 rounded-md">
          <div className="flex justify-between p-2 w-full">
            <div className="">
              <div className="flex items-center">
                <span className="mr-2 text-lg font-semibold">{service.title}</span>
                <span><Rating number={extractDataByIdentifier(service.description, "star")} /></span>
                <span>432 reviwes</span>
              </div>
              <div className="flex items-center mt-2">
                <PinIcon ratio="w-4.5 h-4.5 " />
                <span className="text-dark-text-muted dark:text-dark-text-muted ml-1">{extractDataByIdentifier(service.description, "location")}</span>
              </div>
            </div>
            <div className="flex justify-center items-center *:mx-2">
              <div className="flex flex-col">
                <span className="ml-auto text-2xl font-semibold">
                  {service.price_cents}$
                </span>
                <span className="text-sm text-light-text-muted dark:text-dark-text-muted">We Price Match</span>
              </div>
              <Button to={`/services/${urlParam.title}/${urlParam.id}/book`} variant="fill" className="h-full" >Book Now</Button>
            </div>
          </div>
          <div className="w-full grid px-2 grid-cols-5 gap-2 mt-6">
            <div className="row-span-2 col-span-2 overflow-hidden rounded-lg ">
              <img
                src={service?.media?.[0]?.file}
                alt="Agency main"
                className="object-cover w-full h-60 transition-all hover:scale-105"
                style={{ gridRow: "span 2 / span 2" }}
              />
            </div>
            {/* Next 7 images */}
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={uuidv4()} className="overflow-hidden rounded-lg">
                  <img
                    key={uuidv4()}
                    //todo:dot fordet to use the rest of the photos
                    src={service?.media?.[0]?.file}
                    alt={`Agency ${i + 2}`}
                    className="object-cover w-full h-29 transition-all hover:scale-105"
                  />
                </div>
              ))}
          </div>
          <div className="flex justify-between mt-8 ">
            <div className="pl-2">
              <h1 className=" font-medium ">Description</h1>
              <p className="w-2xl text-sm text-light-text-muted dark:text-dark-text-muted">a global leader in luxury hospitality, renowned for its commitment to the "Golden Rule"—treating others as one wishes to be treated. Since opening its first hotel in 1961, the brand has expanded to operate over 130 hotels and resorts in major cities and remote destinations worldwide.</p>
            </div>
            <div className="min-h-full ml-40 mr-10 border-l-2 border-light-border dark:border-dark-light "></div>
            <div className="flex flex-col w-full ">
              <div className="flex flex-col mb-4">
                <span className="text-ok">Mostly Positive</span>
                <span>over 231 from 275 People liked this place </span>
              </div>
              <div>
                <div className="w-11/12 mb-4 border-t-2 border-light-border dark:border-dark-light"></div>
                <h1 className="font-medium mb-3">Surroundings</h1>
                <div className="flex ">
                  <div className="flex flex-col *:mb-4 *:pl-2">
                    <div className="flex"> <PlainIcon /> <span className="ml-2 text-sm text-light-text-muted dark:text-dark-text-muted">Airport (11.8KM)</span ></div>
                    <div className="flex"><TrainIcon /> <span className="ml-2 text-sm text-light-text-muted dark:text-dark-text-muted">Airport (4.8KM)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
              </div>
    )
};

export default Agency;