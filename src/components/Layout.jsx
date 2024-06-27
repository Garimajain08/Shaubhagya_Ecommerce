import React, { useState,useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';

export default function Layout() {
  
 
  return (
    <div>
     
       
          <Navbar />
          <Outlet />
          <Footer />
      
      
    </div>
  );
}
