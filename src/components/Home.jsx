import React from 'react'
import Herosection from './Herosection'
import Services from './Services'
import Trusted from './Trusted'
export default function Home() {
    return (
        <div>
            <Herosection head={"Saubhagya Ecommerce"} />
            
            <Services />
            <Trusted />
        </div>
    )
}
