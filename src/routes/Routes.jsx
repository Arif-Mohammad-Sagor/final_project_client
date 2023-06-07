import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Dashboard from '../layout/Dashboard';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Home/Login&Signup/Login';
import SignUp from '../pages/Home/Login&Signup/SignUp';
import ClassesPage from '../pages/Classes/ClassesPage';
import InstructorsPage from '../pages/Instructors/InstructorsPage';

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
  },
]);


export default router