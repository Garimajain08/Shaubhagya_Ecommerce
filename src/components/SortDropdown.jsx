import React from 'react'
import { useState } from 'react';
export default function SortDropdown() {
    const [sortOption, setSortOption] = useState('All');

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
                <option value="price-lowest">Price:Low to High</option>
                <option disabled value=""></option>
                <option value="price-highest">Price:High to Low</option>
                <option disabled value=""></option>
                <option value="price-az">Price:A-Z</option>
                <option disabled value=""></option>
                <option value="price-za">Price:Z-A  </option>
            </select>
        </div>
    )
}
