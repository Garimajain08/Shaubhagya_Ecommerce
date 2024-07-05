import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


export default function Stars({rating}) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <div className="flex gap-1 mt-5">
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <FaStar key={`full-${index}`} />
          ))}
        {halfStar && <FaStarHalfAlt />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <FaRegStar key={`empty-${index}`} />
          ))}
      </div>
    );
 
  
}
