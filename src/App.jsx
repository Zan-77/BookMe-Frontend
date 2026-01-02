import { Outlet } from 'react-router'
import useTheme from './hooks/useTheme';
import useLanguage from './hooks/useLanguage';
import useAuthUser from './hooks/useAuthUser';
import { getAllServices } from './api/services/getServices';
function App() {
useTheme();
useLanguage();
useAuthUser();
getAllServices();
  return (
    <Outlet/>
  )
} 

export default App
  