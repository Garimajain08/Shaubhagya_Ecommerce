import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Price from './Price';
import Stars from './Stars';
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { TbReplace } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
export default function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startimg,setstartimage]=useState('');

  useEffect(() => {
    const url = `https://api.pujakaitem.com/api/products/${id}`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setstartimage(data.image[0])
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
 
  return (
    <div className='max-w-[1200px] mx-auto  flex   gap-5 justify-around p-7 '>
    {data && (
      <>
        <div className='flex flex-col  gap-1 justify-between'>
          {data.image.map((image, index) => (
            <img onClick={()=>setstartimage(image)} style={{ height: '80px', width: '500px' }} key={index} src={image.url} alt={`Image ${index}`} />
          ))}
        </div>
        <div className='flex items-center '>
          <img src={startimg.url}  style={{ height: '200px', width: '800px' }} alt="" />
        </div>
        <div className= ' flex flex-col mt-7'>
          <h2 className=' text-3xl text-left '>{data.name}</h2>
          <p><Stars rating={data.stars}/></p>
          <p>{data.reviews} Reviews</p>
          <p className='flex'>MRP : <del><Price price={ data.price + 250000}/></del></p>
           <p className='text-blue-700 flex'>Deal of the day : <Price price={data.price}/></p>
          <p className='mt-3'>{data.description}</p>
          <div className='flex justify-between  items-center mt-5'>
            <div >
            <TbTruckDelivery style={{height:'30px',width:'50px'}} />
            <p>Free Delivery</p>
            </div>
            <div>
            <MdOutlineSystemSecurityUpdateGood  style={{height:'30px',width:'50px'}}/>
            <p>100 Days Warranty</p>
            </div>

            <div>
            <TbReplace style={{height:'30px',width:'50px'}} />
            <p>Replace within 20 Days</p>
            </div>
          
          </div>
        </div>
      </>
    )}
  </div>
  );
}
