import { Outlet } from "react-router"
import Topnav from "../components/nav/Topnav"
import SideNav from "../components/nav/SideNav"

const AppLayout = () => {

  return (
    <div className="relative">
      <Topnav />
      <SideNav />
      <div className="h-full border-l-2 ml-48  border-light-border dark:border-dark-light px-8">
        <div className="min-h-dvh pt-16">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppLayout