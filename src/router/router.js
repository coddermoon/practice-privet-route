import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Login from "../components/Login";
import Orders from "../components/Orders";
import Register from "../components/Register";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
   
        {
            path:'/',
            element:<App/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
                {
                    path:'/orders',
                    element:<PrivetRoutes>
                        <Orders/>
                    </PrivetRoutes>
                },
            ]
        },
   
])

export default router