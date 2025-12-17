import Button from '../Button'
import useTheme from '../../hooks/useTheme'
import ThemeIcon from '../svg/ThemeIcon'
import LanguageIcon from '../svg/LanguageIcon'
import useLanguage from '../../hooks/useLanguage'
import Dropdown from '../Dropdown'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import CheckIcon from '../svg/CheckIcon'
const Topnav = () => {
  const [theme, setTheme] = useTheme()
  const [text, setLang, currnLang, langList] = useLanguage();
  console.log(currnLang);

  const [openDropdown, setOpenDropDown] = useState(false);
  return (
    <div className='fixed top-0 left-0 flex flex-row-reverse h-14 lg:h-16 py-3 px-2 *:mx-1  lg:*:mx-2 w-full bg-light dark:bg-dark'>
      <Button to="/login" variant="text" color="accent">Login</Button>
      <Button to="register" variant="fill">Register</Button>
      <Button variant="text" color="accent" startIcon={<ThemeIcon />} onClick={() => { theme === "dark" ? setTheme("light") : setTheme("dark") }} />
      <Dropdown drop={openDropdown} onMouseLeave={(e)=>{setOpenDropDown(false)}}
        button={<Button variant="text" color="accent"  startIcon={<LanguageIcon />} onClick={()=>{setOpenDropDown(!openDropdown)}}  />}
        dropItems={langList.map((item) => (
          <Button className="text-start" variant="text" color="accent" onClick={()=>{setLang(item)}}  key={uuidv4()} endIcon={currnLang === item ? <CheckIcon /> : ""}>{item}</Button>
        ))}
      />
    </div>
  )
}

export default Topnav