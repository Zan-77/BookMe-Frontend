import Button from '../Button'
import FerrisWheelIcon from '../svg/FerrisWheelIcon'
import HomeIcon from '../svg/HomeIcon'
import HotelIcon from '../svg/HotelIcon'
import PlaneIcon from '../svg/PlaneIcon'
import RightArrowIcon from '../svg/RightArrowIcon'
import TrainIcon from '../svg/TrainIcon'
import Text from "../Text"
const SideNav = ({ open = false, ...props }) => {
    return (
        <div className={`fixed top-16 left-0 h-dvh flex flex-col py-8 px-4  bg-light dark:bg-dark `}>
            <div className='flex flex-col *:my-0.5'>
                <Button className="w-full" variant="text" color="accent" startIcon={<PlaneIcon />}>{open ? "Flghts" : ""}</Button>
                <Button className="w-full" variant="text" color="accent" startIcon={<TrainIcon />}>{open ? "Trains" : ""}</Button>
                <Button className="w-full" variant="text" color="accent" startIcon={<HomeIcon />}>{open ? "Homes" : ""}</Button>
                <Button className="w-full" variant="text" color="accent" startIcon={<HotelIcon />}>{open ? "Hotels" : ""}</Button>
                <Button className="w-full" variant="text" color="accent" endIcon={<RightArrowIcon/>}>{open ? "More Services" : ""}</Button>
            </div>
        </div>
    )
}

export default SideNav