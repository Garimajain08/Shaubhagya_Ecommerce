import React from 'react'
import { FaPlus,FaMinus } from "react-icons/fa";

export default function AddtoCart({stock,total,settotal}) {
    return (
        <div>
            <p className='flex'>
                <button onClick={() => settotal(p => (p > 1 ? p - 1 : 1))} className='text-xl text-left font-medium w-12'><FaMinus /></button>
                <span className='text-xl font-normal'>{total}</span>
                <button
                    onClick={() => {
                        settotal(p => (
                            (p < stock ? p + 1 : p)
                        ));
                    }}
                    className='text-xl w-12 font-medium   flex items-center justify-end'
                >
                    <FaPlus className='' />
                </button>
            </p>
        </div>
    )
}
