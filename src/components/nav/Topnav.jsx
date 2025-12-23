import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux'
import { setIsLogged } from '../../features/user/userSlice';
import Button from '../Button'
import useTheme from '../../hooks/useTheme'
import ThemeIcon from '../svg/ThemeIcon'
import LanguageIcon from '../svg/LanguageIcon'
import useLanguage from '../../hooks/useLanguage'
import Dropdown from '../Dropdown'
import CheckIcon from '../svg/CheckIcon'
import HamburgerIcon from '../svg/HamburgerIcon'
import Input from "../Input"
import UserIcon from '../svg/userIcon'
import SearchInput from '../Inputs/SearchInput';

const Topnav = ({ setSideNav, openSideNav }) => {
  const dispatch = useDispatch();
  const islooged = useSelector(state => state.user.islogged);
  const [theme, setTheme] = useTheme()
  const [text, setLang, currnLang, langList] = useLanguage();
  const [openDropdownLang, setOpenDropDownLang] = useState(false);
  const [openDropdownUser, setOpenDropDownUser] = useState(false);
  return (
    <div className='fixed top-0 left-0 flex flex-row-reverse justify-between h-14 lg:h-16 py-3 px-2 *:mx-1  lg:*:mx-2 w-full bg-light dark:bg-dark'>
      <div className='flex flex-row-reverse'>
        {
          islooged
            ?
            <Dropdown onMouseLeave={(e) => { setOpenDropDownUser(false) }}
              drop={openDropdownUser}
              button={<Button variant="text" color="accent" startIcon={<UserIcon />} onClick={() => { setOpenDropDownUser(!openDropdownUser) }} />}
              dropItems={<Button className="text-start text-error!" variant="text" color="accent" onClick={() => {
                dispatch(setIsLogged(false))
                localStorage.removeItem("access")
                localStorage.removeItem("refresh")
              }}>Logout</Button>}
            />
            :
            <div className='flex justify-center items-center *:mx-1  lg:*:mx-2'>
              <Button to="register" variant="fill">Register</Button>
              <Button to="/login" variant="text" color="accent">Login</Button>
            </div>
        }
        <Button variant="text" color="accent" startIcon={<ThemeIcon />} onClick={() => { theme === "dark" ? setTheme("light") : setTheme("dark") }} />
        <Dropdown drop={openDropdownLang} onMouseLeave={(e) => { setOpenDropDownLang(false) }}
          button={<Button variant="text" color="accent" startIcon={<LanguageIcon />} onClick={() => { setOpenDropDownLang(!openDropdownLang) }} />}
          dropItems={langList.map((item) => (
            <Button className="text-start" variant="text" color="accent" onClick={() => { setLang(item) }} key={uuidv4()} endIcon={currnLang === item ? <CheckIcon /> : ""}>{item}</Button>
          ))}
        />
      </div>
      <div className='flex'>
        <Button className="mr-32" variant="text" color="accent" startIcon={<HamburgerIcon />} onClick={() => setSideNav(!openSideNav)} />
        <SearchInput />
      </div>
    </div>
  )
}

export default Topnav