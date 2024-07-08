import React from 'react'
import {NavLink} from 'react-router-dom' 
export default function GridComponent({name,price,desc,img,id}) {
  return (
    <div className='shadow-md  gap-5 flex  p-2 '>
      <div className='w-[650px]  shadow-sm'><img className='w-full h-full' src={img} alt="" />
      </div>
     <div>
      <h2 className='text-2xl'>{name}</h2>
      <p>{desc.slice(0,200)}...</p>
    
      <p className='font-medium mt-1'>MRP-{price}</p>
      <NavLink to={`/singleproduct/${id}`}><button className='border-2 bg-white p-2 shadow-sm max-w-28 hover:bg-slate-200'>Read More..</button></NavLink>
      </div>
    </div>
  )
}
