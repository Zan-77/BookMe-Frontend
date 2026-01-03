import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLogged } from '../../features/user/userSlice';
import { v4 as uuidv4 } from 'uuid';
import { getSearch } from '../../api/services/getServices';
import { useNavigate } from 'react-router';
import { setStoreSearchResult, setStoreSearchValue } from '../../features/search/searchSlice';
import Button from '../Button'
import useTheme from '../../hooks/useTheme'
import ThemeIcon from '../svg/ThemeIcon'
import Dropdown from '../Dropdown'
import UserIcon from '../svg/userIcon'
import SearchInput from '../Inputs/SearchInput';


const Topnav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const islooged = useSelector(state => state.user.islogged);
  const [theme, setTheme] = useTheme()
  const [openSearchdropdown, setSearchdropdown] = useState(false);
  const [openDropdownUser, setOpenDropDownUser] = useState(false);
  const [result, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");


  const handleSearch = async (value) => {
    // Clear previous results before new search
    setResults([]);
    dispatch(setStoreSearchResult([]));

    if (!value || !value.trim()) {
      return;
    }

    const res = await getSearch(value);
    if (res.status === 200) {
      setResults(res.data.results);
      dispatch(setStoreSearchResult(res.data.results));
    }
    else {
      return;
    }
  }
  return (
    <div className='fixed z-30 top-0 left-0 flex flex-row-reverse justify-between h-14 lg:h-16 py-3 px-2 *:mx-1  lg:*:mx-1 w-full bg-light dark:bg-dark border-b-2 border-light-border dark:border-dark-light'>
      <div className='flex flex-row-reverse'>
        {
          islooged
            ?
            <div className='flex mx-1'>
              <Button variant="text" color="accent" startIcon={<UserIcon />} onClick={() => { setOpenDropDownUser(!openDropdownUser) }} />
              <Dropdown position='top-14.5 right-4 ' onMouseLeave={(e) => { setOpenDropDownUser(false) }}
                drop={openDropdownUser}
                dropItems={<Button className="text-start text-error! rounded-none!" variant="text" color="accent" onClick={() => {
                  dispatch(setIsLogged(false))
                  localStorage.removeItem("access")
                  localStorage.removeItem("refresh")
                }}>Logout</Button>}
              />
            </div>

            :
            <div className='flex justify-center items-center *:mx-1  lg:*:mx-2'>
              <Button to="register" variant="fill">Register</Button>
              <Button to="/login" variant="text" color="accent">Login</Button>
            </div>
        }
        <Button variant="text" color="accent" startIcon={<ThemeIcon />} onClick={() => { theme === "dark" ? setTheme("light") : setTheme("dark") }} />
      </div>
      <div className='flex *:mr-23'>
        <h1 className='text-lg italic font-bold pt-2'>BOOKME.COM</h1>
        <div className='relative flex'>
          <SearchInput className="w-71"
          hideButton={true}
            searchValue={searchValue}
            setSearchValue={(value) => {
              setSearchValue(value);
              dispatch(setStoreSearchValue(value));
            }}
            onSearch={(value) => { handleSearch(value) }}
            onFocus={(e) => { setSearchdropdown(true) }}
            onClick={(e) => { setSearchdropdown(true) }}
          />
          <Dropdown position='top-11.5 left-0' drop={openSearchdropdown}
            onMouseLeave={(e) => { setSearchdropdown(false) }}
            dropItems={
              result && openSearchdropdown ?
                searchValue !== "" &&
                <div>
                  <span className="px-2 mt-2">Serach Results</span>
                  {
                    result.map((item, idx) => {
                      if (idx < 4)
                        return (
                          <div
                            key={uuidv4()}
                            onClick={() => { navigate(`/services/${item.slug}/${item.id}`) }}
                            className='flex items-center  m-2 w-56 bg-light-light/75 dark:bg-dark-light/75 hover:bg-light-light dark:hover:bg-dark-light hover:cursor-pointer'>
                            {item.media.map((imgs) => imgs.order === 1 ? <img key={uuidv4()} src={imgs.file} className='w-20 h-13 mr-2' alt="" /> : null)}
                            <div className='flex text-sm h-13 items-center px-2'>
                              {item.title}
                            </div>
                          </div>
                        )
                    })
                  }
                </div>
                :
                <div className='flex items-center p-2 m-2 w-56'>
                  <span>NO Result Found</span>
                </div>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Topnav