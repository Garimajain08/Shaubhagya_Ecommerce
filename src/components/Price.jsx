import React from 'react'

const numberFormat = (value) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(value);

export default function Price({price}) {
  return (
    <div>
     {numberFormat(price)}
    </div>
  )
}
