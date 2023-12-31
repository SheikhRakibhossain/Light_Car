import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from './../Pages/Home/MainHome/Home';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Checkout from "../Pages/Checkout/Checkout";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";
import Test from "../Pages/TestPage/Test";
import ContactUs from "../Pages/Contactus/ContactUs";
import Services from "../Pages/Service/Services";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/services',
          element:<PrivateRoute><Services/></PrivateRoute>,
          loader: ()=>fetch('http://localhost:5000/services')
        },
        {
          path:'/checkout/:id',
          element:<Checkout/>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/booking',
          element:<PrivateRoute><Booking/></PrivateRoute>
        },
        {
          path:'/test',
          element:<Test/>
        },
        // contact us page path
        {
          path:'contact-us',
          element:<ContactUs/>
        }
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
  ]);

export default router;