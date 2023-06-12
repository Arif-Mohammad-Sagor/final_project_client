import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Dashboard from '../layout/Dashboard';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Home/Login&Signup/Login';
import SignUp from '../pages/Home/Login&Signup/SignUp';
import ClassesPage from '../pages/Classes/ClassesPage';
import InstructorsPage from '../pages/Instructors/InstructorsPage';
import MyCart from '../pages/UserCart/MyCart';
import EnrolledClasses from '../pages/UserCart/EnrolledClasses';
import AddClass from '../pages/Classes/AddClass';
import MyClasses from '../pages/Classes/MyClasses';
import PrivateRoute from './PrivateRoute';
import MakePayment from '../pages/MakePayment/MakePayment';
import Mypayment from '../pages/UserCart/Mypayment';
import ManageUser from '../pages/Admin Pages/ManageUser';
import ManageClasses from '../pages/Admin Pages/ManageClasses';
import { Feedback } from '../pages/Admin Pages/Feedback';
import AdminHome from '../pages/Admin Pages/AdminHome';
import AdminRoute from './AdminRoute';
import Error from '../pages/ErrorPage/Error';


const router = createBrowserRouter([
  {
    // layout for landing page
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/classes",
        element: <ClassesPage></ClassesPage>,
      },
      {
        path: "/instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
    ],
  },
  {
    // layouts for dashboard page
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "enrolledclasses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "addclasses",
        element: (
          <PrivateRoute>
            <AddClass></AddClass>
          </PrivateRoute>
        ),
      },
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "makepayment",
        element: (
          <PrivateRoute>
            <MakePayment></MakePayment>
          </PrivateRoute>
        ),
      },
      {
        path: "paymenthistory",
        element: (
          <PrivateRoute>
            <Mypayment></Mypayment>
          </PrivateRoute>
        ),
      },
      {
        path: "manageuser",
        element: (
        <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "manageclass",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageclass/feedback/:id",
        element: (
          <AdminRoute>
            <Feedback></Feedback>
          </AdminRoute>
        ),
      },
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
    ],
  },
]);


export default router