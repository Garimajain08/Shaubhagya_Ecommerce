import React, { useState,useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';

export default function Layout() {
  const location = useLocation();
  const [isErrorPage,setError]=useState(false)
  useEffect(() => {
    setError(location.pathname === '*'); // Assuming the error page is handled by a wildcard route
  }, [location]);
  console.log(isErrorPage)
  return (
    <div>
      {isErrorPage ? (
        <Outlet />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}
