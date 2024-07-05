import React from 'react'
import {useContext} from 'react'
import Fproduct from './Fproduct'
import DataContext from "../context/DataContext"
export default function FeaturedProducts() {
  const {products,featured_products,error,loading}=useContext(DataContext)
  if(loading){
    <div>.......Loading .....</div>
   }
  return (
    <div style={{ backgroundColor: 'rgba(81, 56, 238, 0.1)' }}>
      <div  className=' p-2 max-w-[1200px] mx-auto py-7'>
        <p className="text-center md:text-left">CHECK NOW</p>
      <h2 className='text-2xl font-bold text-center md:text-left'>Our Featured Services</h2>
      <div className="featured flex md:flex-row flex-col justify-between items-center mt-4">
      {
      featured_products.map((e) => (
         <Fproduct name={e.name }  price={e.price} image={e.image} category ={e.category}  id={e.id}/>
        ))
      }
      </div>
      </div>
    </div>
  )
}
