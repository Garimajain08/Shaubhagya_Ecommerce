import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'
import FilterSection from "./FilterSection"
import ProductsView from './ProductsView'
export default function Products() {
  return (
    <div className='flex flex-row  max-w-[1200px] mx-auto justify-center'>
      <Sidebar/>
      <div className='flex flex-col max-w-[900px] '>
        <FilterSection/>
        <ProductsView/>
      </div>

     
    </div>
  )
}
