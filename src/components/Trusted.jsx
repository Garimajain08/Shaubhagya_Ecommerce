import React from 'react'
import { BiSolidSave } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";
import { IoLogoDesignernews } from "react-icons/io5";
import { IoBarChartSharp } from "react-icons/io5";
export default function Trusted() {
  return (
    <div style={{ backgroundColor: 'rgba(81, 56, 238, 0.2)' }} className='  max-w-[1200px] mx-auto'>
        <div className='   m-auto md:p-3 '>
      <h3 className='text-center p-3 text-xl md:text-2xl font-medium'> Trusted By 1000+ Companies</h3>
         <div className='flex flex-row justify-evenly p-1 md:p-12'>
              <div className='flex justify-center items-center gap-1 h-[100px] w-[100px] '>
               
                <FaGoogle />   
                <p>Google</p>
              </div>
              <div className='h-[100px] w-[100px] flex justify-center items-center'>
              <IoLogoCodepen className=' w-8 h-6' />
              </div>
              <div className='flex gap-1 items-center h-[100px] w-[100px] '>
              <BiSolidSave />
              <p>LOGIC+</p>
              </div>
              <div  className='h-[100px] w-[100px]  flex justify-center items-center '>
                <  IoLogoDesignernews  className=' w-8 h-6'/>
              </div>
              <div className='flex justify-center items-center gap-2 h-]100px] w-[100px]'>
            
             <IoBarChartSharp />
             <p>CHARTZ</p> 

              </div>
         </div>
        </div>
      
      
    </div>
  )
}
