import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import centerLayout from "../layouts/CenterLayout";
import appLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Agency from "../pages/Agency";
import ServicesLayout from "../layouts/ServicesLayout";
import ServiceDetail from "../pages/serviceDetail";
import Search from "../pages/Search";
import Book from "../pages/Book";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        Component: appLayout,
        children: [
          {
            path: "/",
            Component: Home,
          },
          {
            Component: ServicesLayout,
            children: [
              {
                path: "/services",
                Component: Services,
              },
              {
                path: "/services/:title",
                Component: ServiceDetail,
              },
              {
                path: "/services/search/:query",
                Component: Search,
              },
             
            ]
          },
          {

            path: "/services/:title/:id",
            Component: Agency
          },
          {
            path: "/services/:title/:id/book",
            Component: Book,
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
      },
    ]
  }

]);


export default router;