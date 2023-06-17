import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useClassesLoader from "../hooks/useClassesLoader";
import { FaShoppingCart } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
  const { user,loading, logOut } = useAuth();
  const [data] = useClassesLoader();
  const navigate = useNavigate();
  // console.log(data);
  if (loading) {
    // console.log('it is loading');
    return <progress className="progress w-56"></progress>;
  }
  const handleLogout = () => {
    logOut()

      .then(() => {
        navigate('/')
      })
    .then()
  }

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
      <li>
        <NavLink to="/dashboard/mycart">
          <FaShoppingCart></FaShoppingCart>
          {data?.length}
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-purple-600 text-white">
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
            className="z-50 menu menu-sm dropdown-content mt-3 p-2 shadow bg-purple-600 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="normal-case md:text-2xl">Langu-Academy</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div>
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                data-tooltip-variant="light"
                className="w-10 rounded-full"
                src={user?.photoURL}
              />
              <Tooltip id="my-tooltip" className="z-50" />
            </div>
            <Link onClick={handleLogout} className="btn btn-xs md:btn-sm">
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login" className="btn btn-secondary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
