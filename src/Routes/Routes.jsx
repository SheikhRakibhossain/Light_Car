import {createBrowserRouter,} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from './../Pages/Home/MainHome/Home';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Checkout from "../Pages/Checkout/Checkout";

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
          path:'/service',
          element:<Service/>,
          loader: ()=>fetch('http://localhost:5000/services')
        },
        {
          path:'/checkout/:id',
          element:<Checkout/>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
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