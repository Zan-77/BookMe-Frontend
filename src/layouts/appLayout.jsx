import { Outlet } from "react-router"
import Topnav from "../components/nav/Topnav"

const appLayout = () => {
  return (
    <div>
        <Topnav/>
        <Outlet/>
    </div>
  )
}

export default appLayout