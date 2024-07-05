import React from 'react'
import Price from './Price'
import {NavLink} from "react-router-dom"
export default function Fproduct({name,price,category,image,id}) {

  return (
    <NavLink to={`singleproduct/${id}`}>

    <div className=' p-2 shadow-sm  bg-slate-50  w-[250px]'  title={category}>
       <img  style={{ height: '200px'}}  className="w-[200px] mx-auto" src={image} alt="" />
      <div  className='flex justify-between bg-slate-50 p-1'>
        <p className=' text-xl'>{name}</p>
        <p className='text-xl'><Price price={price}/></p> </div>
     
    </div>
    </NavLink>
  )
}
