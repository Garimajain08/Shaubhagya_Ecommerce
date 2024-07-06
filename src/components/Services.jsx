import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa6";
export default function Services() {
  return (
    < >
    <div className=' p-7 max-w-[1200px] min-w-[500px]  flex md:flex-row flex-col mx-auto  md:justify-between  justify-center items-center gap-2'> 
<div className=' h-28 md:h-40 md:w-1/3  w-full flex-col justify-center flex items-center p-2 '  style={{ backgroundColor: 'rgba(81, 56, 238, 0.2)' }}>
<TbTruckDelivery /> Super Fast and Free Delivery
</div>
<div className='h-40 w-full md:w-1/3 flex flex-col  gap-3 justify-between' >
    <div style={{ backgroundColor: 'rgba(81, 56, 238, 0.2)' }} className='h-20 flex flex-col justify-center items-center p-3 '> <LiaShippingFastSolid />Non-contact Shipping</div>
    <div style={{ backgroundColor: 'rgba(81, 56, 238, 0.2)' }} className='h-20 justify-center items-center flex flex-col p-3'><FaMoneyCheck /> Money-back Guareented</div>
</div>
<div className='h-28 md:h-40  w-full md:w-1/3 flex  flex-col justify-center items-center p-2' style={{ backgroundColor: 'rgba(81, 56, 238, 0.2)' }}>
<MdOutlinePayments />
   <p> Super Secure Payment System</p>
   
</div>


    </div>
    </>
  )
}

