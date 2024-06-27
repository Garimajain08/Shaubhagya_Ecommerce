import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}
