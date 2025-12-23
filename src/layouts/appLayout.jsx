import { Outlet } from "react-router"
import Topnav from "../components/nav/Topnav"
import SideNav from "../components/nav/SideNav"
import { useState } from "react";

const appLayout = () => {
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <div>
      <Topnav setSideNav={setOpenSideNav} openSideNav={openSideNav} />
      <div className="pt-16">
        <SideNav open={openSideNav} />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default appLayout