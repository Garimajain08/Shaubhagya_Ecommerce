import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'
import FilterSection from "./FilterSection"
import ProductsList from './ProductsList'
import ProductsGrid from './ProductsGrid'
export default function Products() {
  const [gridtemplate,setgridtemplate]=useState(true)
  return (
    <div className='flex flex-row p-1  mx-auto   min-w-[1100px] max-w-[1200px] gap-x-24 justify-between '>
      <Sidebar/>
      <div className='flex flex-col '>
        <FilterSection gridtemplate={gridtemplate} setgridtemplate={setgridtemplate}/>
      
      </div>

     
    </div>
  )
}
