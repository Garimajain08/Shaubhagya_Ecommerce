import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Hamberger({setshowHamberger,setMenuOpen,setClose,showHamberger}) {
  return (
    <div>
       <GiHamburgerMenu 
        className={`hamburger-icon ${showHamberger ? 'inline' : 'hidden'}`}
        onClick={() => {
          setshowHamberger(false);
          setMenuOpen(true);
          setClose(true);
        }}
      />
    </div>
  )
}
