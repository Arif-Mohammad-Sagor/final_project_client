import React from 'react'
import { FaBook, FaBookOpen, FaBookReader, FaBookmark, FaCalculator, FaHome, FaShoppingBasket, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Link, Outlet, } from 'react-router-dom';
import useAdmin from '../pages/hooks/useAdmin';
import useAuth from '../pages/hooks/useAuth';

const Dashboard = () => {
  const [adminRole] = useAdmin();
  console.log(adminRole);
  const { loading } = useAuth();
  
  const userRole = adminRole?.role;
  // console.log(userRole.role);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  bg-purple-800 text-lg text-white">
          {/* Sidebar content here */}
          {userRole === "student" ? (
            <>
              <li>
                <Link to="/dashboard/mycart">
                  <FaShoppingBasket></FaShoppingBasket> MyCart
                </Link>
              </li>
              <li>
                <Link to="/dashboard/enrolledclasses">
                  <FaBookmark></FaBookmark> Enrolled Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/paymenthistory">
                  <FaCalculator></FaCalculator> Payment History
                </Link>
              </li>
            </>
          ) : userRole === "instructor" ? (
            <>
              <li>
                <Link to="/dashboard">
                  <FaHome></FaHome> Instructor{" "}
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myclasses">
                  <FaBook></FaBook> Myclasses
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addclasses">
                  <FaBookReader></FaBookReader> Add Classes Classes
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard/adminhome">
                  {" "}
                  <FaHome></FaHome> Admin{" "}
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageuser">
                  <FaUserAlt></FaUserAlt> Manage User
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageclass">
                  {" "}
                  <FaBookOpen></FaBookOpen> Manage Classes
                </Link>
              </li>
            </>
          )}
        </ul>
        <hr></hr>
        <ul className="menu px-4 w-80  h-full bg-purple-800 text-white text-lg">
          <li>
            <Link to="/"><FaHome></FaHome> Home</Link>
            <Link to="/classes"><FaBookReader></FaBookReader> Classes</Link>
            <Link to="/instructors"><FaUserAlt></FaUserAlt> Instuctors</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard