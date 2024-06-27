import React from 'react'
import hero from '../assets/hero.jpg'


export default function Herosection({head}) {
  return (
   
    
<div className='flex'>
   <div  className=' flex  flex-col md:flex-row max-w-[1200px] mx-auto   sm:p-4'> 


<div className="content flex flex-col justify-center  md:w-1/2 p-5 sm:p-7">
    <p>WELCOME to</p>
   <h3 className='font-bold text-4xl'>{head}</h3>
   <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non maxime aperiam voluptatem suscipit distinctio. Officiis quos illum atque repudiandae perferendis saepe iure ipsam explicabo odio neque minus, vel asperiores dolorum incidunt quibusdam eligendi culpa id architecto consequuntur veritatis. Earum dolore quod eos doloribus.</p>
    <button className='bg-purple-700 px-3 py-2 self-start mt-5'>SHOP NOW</button>
</div>

<div className=" md:w-1/2 relative">
    
    <img src={hero} className='h-[360px] md:w-[450px]  w-full p-3 z-20 img relative ' alt="" /> 
    <div className='  absolute -top-2 -right-0 h-48 w-3/5 z-0 box' style={{ backgroundColor: 'rgba(81, 56, 238, 0.4)' }}>
        
         </div>
</div>

</div>
</div>
    
  
  )
}

