import React,{ useContext } from 'react'
import { FilterProvider } from '../context/Filter_context';
import { FilterContext } from '../context/Filter_context'
import GridComponent from './GridComponent';


export default function ProductsGrid() {
    const {state,filteredProducts}=useContext(FilterContext)
    const {products,loading,error}=state;
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
    <div className='flex flex-col gap-2 '>
     { filteredProducts.map((e)=>(

       <GridComponent name={e.name}  img = {e.image} desc={e.description} price={e.price} id={e.id}/>



     ))
    }
    </div>
  )
}
