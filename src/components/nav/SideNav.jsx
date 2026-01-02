import Button from '../Button'
import FerrisWheelIcon from '../svg/FerrisWheelIcon'
import HomeIcon from '../svg/HomeIcon'
import HotelIcon from '../svg/HotelIcon'
import ResturantIcon from '../svg/ResturantIcon'
import RightArrowIcon from '../svg/RightArrowIcon'
import TrainIcon from '../svg/TrainIcon'
import Text from "../Text"
const SideNav = ({ ...props }) => {
    return (
        <div className={`fixed z-30 top-15 w-48  h-dvh flex flex-col p-4 bg-light dark:bg-dark`}>
            <div className='flex flex-col *:mb-1.5'>
                <h1 className='text-lg font-semibold'>Services</h1>
                <Button to="/services/hotels" className="w-full" variant="text" color="accent" startIcon={<HotelIcon />}>Hotels</Button>
                <Button to="/services/houses" className="w-full" variant="text" color="accent" startIcon={<HomeIcon />}>Houses</Button>
                <Button to="/services/resturants" className="w-full" variant="text" color="accent" startIcon={<ResturantIcon />}>Resturants</Button>
                <Button to="/services/entertainments" className="w-full" variant="text" color="accent" startIcon={<FerrisWheelIcon />}>Entertainments</Button>
                <Button to="/services" className="w-full" variant="text" color="accent" endIcon={<RightArrowIcon />}>More Services</Button>
            </div>
                <div className='border-b-2 border-light-text-muted dark:border-dark-light'/>
        </div>
    )
}

export default SideNav