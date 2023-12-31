import { Link, NavLink } from "react-router-dom";
// import logo from '../../../assets/images/logo';
import logo from "../../assets/icons/car-logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Service from './../../Pages/Service/Service';
import BookServices from "../../Pages/BookServices/BookServices";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("service-access-token");
        toast.success('Logout successful!', {
          position: 'top-right', // You can change the position as needed
          autoClose: 2000, // Auto-close the toast after 3 seconds (adjust as needed)
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      
      })
      .catch((error) => console.log(error));
  };

  const options = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/test">Test Things</NavLink>
      </li>

      {user?.email ? (
        <>
          {" "}
          <li>
            <Link onClick={handleLogOut}>Log Out</Link>
          </li>
          <li>
            <NavLink to="/booking">Bookings</NavLink>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>{" "}
        </>
      )}
    </>
  );

  return (
    <>
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {options}
          </ul>
        </div>
        <img
          className="w-20"
          src={logo}
          alt="website logo with a art car in red color"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{options}</ul>
      </div>
      <div className="navbar-end">
       <BookServices/>
      </div>
    </div>

    <ToastContainer />
    
    
    </>
  );
};

export default Header;
