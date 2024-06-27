import React from 'react'
import SplineViewer from './SplineViewer.jsx'
export default function Cart() {
  const splineUrl = 'https://prod.spline.design/qRKYGrS9kOzSjpol/scene.splinecode';
  return (
    <div className='h-7'>
       <SplineViewer url={splineUrl} />
    </div>
  )
}
