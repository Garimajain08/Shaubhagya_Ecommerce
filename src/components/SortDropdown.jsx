
import { useState } from 'react';
import React, { useContext } from 'react'
import { FilterProvider } from '../context/Filter_context';
import { FilterContext } from '../context/Filter_context'



export default function SortDropdown() {
    const {state,sortOption,setSortOption}=useContext(FilterContext)
    const {products,loading,error}=state;



    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        // Add your sorting logic here based on the selected sort option
    };
    return (
        <div>
            <select
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                className="p-1 border rounded flex flex-col gap-3 text-lg"
            >
                <option hidden value="">Sort By Featured </option>
                <option value="lowest">Price:Low to High</option>
                <option disabled value=""></option>
                <option value="highest">Price:High to Low</option>
                <option disabled value=""></option>
                <option value="a-z">Price:A-Z</option>
                <option disabled value=""></option>
                <option value="z-a">Price:Z-A  </option>
            </select>
        </div>
    )
}
