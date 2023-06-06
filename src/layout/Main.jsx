import React from 'react'
import Navbar from '../pages/shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/shared/Footer';

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default Main