import React from 'react'
import { CiGrid41, CiBoxList} from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductsGrid from './ProductsGrid';
import SortDropdown from './SortDropdown';
export default function FilterSection({gridtemplate,setgridtemplate}) {
  return (
    <div className='flex  flex-col ' >
      <div className=' flex justify-between'>
      <div className='flex gap-4 '>
     <CiGrid41 onClick={()=>setgridtemplate(true)}  className={`h-7 w-6 cursor-pointer ${gridtemplate ? 'bg-slate-400' : ''}`}/>
     <CiBoxList onClick={()=>setgridtemplate(false)}  className={`h-7 w-6 cursor-pointer ${!gridtemplate ? 'bg-slate-400' : ''}`}/>
     </div>
     <div>
    12 total products
     </div>
     <div>
     <SortDropdown/>
     </div>
     </div>
     <div>
    {!gridtemplate? <ProductsGrid/>
    :
     <ProductsList/>
    }
     </div>
     </div>
  )
}
