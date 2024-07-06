import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Price from './Price';
import Stars from './Stars';
import AddtoCart from './AddtoCart';
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import { FaPlus,FaMinus } from "react-icons/fa";
export default function SingleProduct() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startimg, setStartImage] = useState('');
  const [currcolor, setColor] = useState("");
  const [cart,setcart]=useState(false)
  const[total,settotal]=useState(1);
  const [available,setavailable]=useState(0)
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
        setStartImage(data.image[0]);
        setLoading(false);
        if (data.stock >= 1) {
          setColor(data.colors[0])
          setavailable(1);
        }
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
    <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row gap-5 justify-around p-7'>
      {data && (
        <>
          <div className='flex md:flex-col justify-center gap-y-2'>
            {data.image.map((image, index) => (
              <img
                onClick={() => setStartImage(image)}
                style={{ height: '80px', width: '500px' }}
                key={index}
                src={image.url}
                alt={`Image ${index}`}
              />
            ))}
          </div>
          <div className='flex items-center'>
            <img
              src={startimg.url}
              className='min-w-[500px] h-[300px] md:h-[200px] md:min-w-[0px] w-[700px]'
              alt=""
            />
          </div>
          <div className='min-w-[480px] max-w-full mt-7 p-2'>
            <h2 className='text-3xl text-left'>{data.name}</h2>
            <p><Stars rating={data.stars} /></p>
            <p>{data.reviews} Reviews</p>
            <p className='flex'>MRP: <del><Price price={data.price + 250000} /></del></p>
            <p className='text-blue-700 flex'>Deal of the day: <Price price={data.price} /></p>
            <p className='mt-3'>{data.description}</p>
            <div className='flex justify-between items-center mt-5'>
              <div className='flex flex-col items-center'>
                <TbTruckDelivery style={{ height: '30px', width: '50px' }} />
                <p className='text-center'>Free Delivery</p>
              </div>
              <div className='flex flex-col items-center'>
                <MdOutlineSystemSecurityUpdateGood style={{ height: '30px', width: '50px' }} />
                <p className='text-center'>100 Days Warranty</p>
              </div>
              <div className='flex flex-col items-center'>
                <TbReplace style={{ height: '30px', width: '50px' }} />
                <p>Replace within 20 Days</p>
              </div>
            </div>
            <div className='leading-loose mt-2'>
              <p>Available: <span className='font-bold'>{available && total<data.stock ? "in stock" : "out of stock"}</span></p>
              <p>ID: <span className='font-bold'>{data.id}</span></p>
              <p>Brand: <span className='font-bold'>{data.company}</span></p>
            </div>
            <div className='bg-black h-1'></div>
            {data.stock && (

              <div className='colors flex items-center gap-2 mt-3'>
                Colors -
                {data.colors.map((d, ind) => (
                  <div
                    key={ind}
                    className='bg h-5 w-5 rounded-full flex items-center justify-center'
                    style={{ backgroundColor: d }}
                    onClick={() => setColor(d)}
                  >
                    {d === currcolor &&  <FaCheck className="text-white"/>}
                  </div>
                ))}
              </div>
            )}
           
           {cart?
            <AddtoCart  total={total} stock={data.stock} settotal={settotal}/>
           :"" }
           <br />
           <button type="button"  style={{ backgroundColor: 'rgba(81, 56, 238, 1)' }}  onClick={() => setcart(true)}className="text-white p-3  hover:bg-purple-800">Add to Cart</button>
          </div>
        </>
      )}
    </div>
  );
}
