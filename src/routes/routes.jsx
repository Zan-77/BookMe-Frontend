import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import centerLayout from "../layouts/centerLayout";
import appLayout from "../layouts/appLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        Component: appLayout,
        children: [
          {
            path: "/",
            Component:Home
          }
        ]
      },
      {
        Component: centerLayout,
        children: [
          {
            path: "/login",
            Component: Login,

          },
          {
            path: "/register",
            Component: Register
          }
        ]
      }
    ]
  }

]);


export default router;