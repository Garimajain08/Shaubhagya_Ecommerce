import React from 'react'
import viteLogo from '/vite.svg'
import {IoCart} from "react-icons/io5"
import { IoClose } from "react-icons/io5";
import { useState,useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet,Link ,NavLink} from 'react-router-dom'
import Hamberger from './Hamberger';
import Herosection from './Herosection';

export default function Navbar() {
  const[isMenuOpen,setMenuOpen]=useState(true)
  const[isClose,setClose]=useState(false)
  const [showHamberger,setshowHamberger]=useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <640) {
        setMenuOpen(false);
        setshowHamberger(true);
      } else {
        setMenuOpen(true);
        setClose(false);
        setshowHamberger(false)
      }
      setClose(false);
    };

    // Set initial state based on current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>

    <div className={`flex shadow-md justify-between   sm:p-5 p-6  mb-7 ${isClose?"h-screen items-center text-3xl flex-col ":""} `} >
    {/* <img src={viteLogo} alt=""  className=''/> */}
    <p className={`font-extrabold text-xl md:p-2 ${isClose ? 'mt-7  text-3xl' : ''}`}>SM..</p>
    <ul className={` gap-7 flex ${isMenuOpen?' flex-col sm:flex-row':"hidden"} ${!showHamberger?"justify-end items-center w-full ":""}`}>

        <li ><NavLink  className={({ isActive }) => (isActive ? 'text-bold underline' : '')} to="/">Home</NavLink></li>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'text-bold underline' : '')} to="/about">About</NavLink></li>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'text-bold underline' : '')} to="/products">Product</NavLink></li>
        <li ><NavLink  className={({ isActive }) => (isActive ? 'text-bold underline' : '')} to="/contact">Contact</NavLink></li>
        <li>
            <NavLink to="/cart" >
           <div className='relative inline-block'>
              <IoCart className="text-2xl trolley relative" />
               <span  className="absolute -top-2 text-xs rounded-full  -right-3 trolley-item bg-blue-100 ">10</span>
              </div>
            </NavLink>
          </li>
    </ul>
   
   
   
<Hamberger setClose={setClose} setMenuOpen={setMenuOpen} setshowHamberger={setshowHamberger} showHamberger={showHamberger}/>
    <IoClose className={`${isClose?"inline":"hidden"}`}  onClick={()=>{
       setMenuOpen(false);
       setClose(false);
       setshowHamberger(true);
    }}/>
   </div>
  


    </>
  )
}
