import Button from '../Button'
import Dropdown from '../Dropdown'
import SearchIcon from '../svg/SearchIcon'

const SearchInput = () => {
  return (
    <div className='relative flex items-center pl-2 bg-light dark:bg-dark border-2 border-dark-light rounded-md'>
        <input type="text" className='h-full bg-light dark:bg-dark outline-none w-46' placeholder='Search . . .'/>
        <Button variant="fill" className="absolute top-0 -right-1 rounded-s-none" startIcon={<SearchIcon/>}></Button>
        <Dropdown className="top-7 translate-x-1 w-59"
        drop={true}
         dropItems={<Button>asdsa</Button>}
         />
    </div>
  )
}

export default SearchInput