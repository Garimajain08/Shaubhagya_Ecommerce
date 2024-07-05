import React from 'react'
import Herosection from './Herosection'
import Services from './Services'
import Trusted from './Trusted'
import FeaturedProducts from './featuredProducts'
export default function Home() {
    return (
        <div>
            <Herosection head={"Saubhagya Ecommerce"} />
            
            <Services />
            <FeaturedProducts/>
            <Trusted />
            
        </div>
    )
}
