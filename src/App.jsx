import { Outlet } from 'react-router'
import useTheme from './hooks/useTheme';
import useLanguage from './hooks/useLanguage';
function App() {
useTheme();  
  return (
    <Outlet/>
  )
} 

export default App
  