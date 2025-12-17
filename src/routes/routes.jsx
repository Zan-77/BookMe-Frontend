import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import login from "../pages/login";
import Register from "../pages/Register";
import centerLayout from "../layouts/centerLayout";
import appLayout from "../layouts/appLayout";

const router = createBrowserRouter([
  {
    Component:App,
    children:[
      {
    Component:appLayout,
    children:[
      {
        path:"/",
        
      }
    ]
  },
  {
    Component: centerLayout,
    children:[
      {
        path:"/login",
        Component:login,
        
      },
      {
        path:"/register",
        Component:Register
      }
    ]
  }
    ]
  }
  
]);


export default router;