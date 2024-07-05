import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import Herosection from './Herosection'
export default function About() {
 const {products,featured_products,error,loading}=useContext(DataContext)

 if(products){
  console.log("Products",products);
  console.log("Featured Products",featured_products)
  
 }
  return (
    <div>
      <Herosection head={`Saubhagya Mart `}/>
    </div>
  )
}
