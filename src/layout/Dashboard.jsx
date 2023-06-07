import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  var userRole = 'student';


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
        <ul className="menu p-4 w-80 h-full bg-green-300 text-base-content">
          {/* Sidebar content here */}
          {userRole === "student" ? (
            <>
              <li>
                <Link to="/dashboard"> Home</Link>
              </li>
              <li>
                <Link to="/dashboard/mycart"> MyCart</Link>
              </li>
              <li>
                <Link to="/dashboard/enrolledclasses">Enrolled Classes</Link>
              </li>
            </>
          ) : userRole === "instructor" ? (
            <>
              <li>
                <Link to="/dashboard/"> Instructor Home</Link>
              </li>
              <li>
                <Link to="/dashboard/myclasses"> Myclasses</Link>
              </li>
              <li>
                <Link to="/dashboard/addclasses">Add Classes Classes</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard"> Admin</Link>
              </li>
              <li>
                <Link to="/dashboard"> Manage User</Link>
              </li>
              <li>
                <Link to="/dashboard">Add something</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard