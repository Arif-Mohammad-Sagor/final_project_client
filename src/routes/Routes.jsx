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

const router = createBrowserRouter([
  {
    // layout for landing page
    path: "/",
    element: <Main></Main>,
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
    element: <Dashboard></Dashboard>,
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
        element: <AddClass></AddClass>,
      },
      {
        path: "myclasses",
        element:<MyClasses></MyClasses>,
      },
    ],
  },
]);


export default router