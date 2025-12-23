import { Outlet } from 'react-router'
import useTheme from './hooks/useTheme';
import useLanguage from './hooks/useLanguage';
import useAuthUser from './hooks/useAuthUser';
function App() {
useTheme();
useLanguage();
useAuthUser();
  return (
    <Outlet/>
  )
} 

export default App
  