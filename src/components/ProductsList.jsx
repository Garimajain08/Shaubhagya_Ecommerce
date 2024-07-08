import React, { useContext } from 'react'
import { FilterProvider } from '../context/Filter_context';
import { FilterContext } from '../context/Filter_context'
import Fproduct from './Fproduct';
export default function ProductsList() {
  const {state}=useContext(FilterContext)
  const {products,loading,error}=state;
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products.</div>;
  } 

  return (
    <div className="products-view ">
    <h2 className='text-3xl font-bold m-3' > Our Products</h2>
    <div className='  flex flex-wrap justify-between gap-y-3'>
     {
        products.map((data)=>(
           
            <Fproduct name={data.name} price={data.price} category={data.company} image={data.image} id={data.id}/>
        ))

     }
    </div>
  </div>
  )
}
