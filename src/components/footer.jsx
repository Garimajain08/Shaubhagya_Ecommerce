import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
export default function Footer() {
  return (
   
   
    <div className='w-full   min-w-[1200px] mt-24 mb-0 h-72 md:p-2 text-white flex flex-col items-center justify-center mx-auto' style={{"background-color":"#282c34"}}>

    <div className='  gap-3 flex flex-col md:flex-row  items-center  md:gap-44 lg:gap-72 md:items-center md:justify-center '>

       <div>
         <p>Shaubhagya Mart</p>
         <p>Near Kala Mahal Sironj</p>
       </div>


      <div >
      <p> Follow Us</p>
      <ul className='flex gap-2'>
       <li><a href="/"><FaFacebook /> </a></li>
       <li><a href="/"><FaTwitter /> </a></li>
       <li><a href="/"><FaLinkedin /> </a></li>
       <li><a href="/"><FaInstagram /> </a></li>
      </ul>
     </div>
     <div>
       <p>Call Us</p>
       <p>+91 1234567890</p>
     </div>



    </div>
   <div className='flex flex-col md:flex-row md:gap-72 items-center justify-center mt-12'>
   <p >© 2024 ShaubhagyaMart All Rights Reserverd  </p>
     <div className='flex flex-col'>
    <p>PRIVACY POLICY</p>
     <p>TERMS AND CONDITION</p>
    </div>
   </div>




    </div>
  )
}
