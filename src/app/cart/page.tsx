"use client"
import { useState,useEffect } from 'react';
import { ProductData } from '../data';
import Image from 'next/image';
const Cart = () => {
  const [cartitems,setcartitems]= useState<any>([]);

  console.log(cartitems, "cartitems")



  useEffect(()=>{
    const storedcartitems:any =localStorage.getItem('cart');
  if (storedcartitems){
    setcartitems(JSON.parse(storedcartitems));
}},[]);
return (
    <div>
       <h2 className='font-serif text-2xl sm:text-3xl lg:text-4xl font black flex justify-center items-center mt-2'>Cart Products</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-7'>
    {(cartitems && cartitems.length > 0) ? cartitems.map((item:any, index:any) => (
      <div key={index} className='flex flex-col justify-center items-center mt-3 p-2 gap-2 border shadow-inner mx-2 bg-slate-300 rounded-md' >
        <Image className='w-full h-150' src={item.imageurl} alt="image" width={800} height={800} />
        <p className='font-normal font-sans text-base'>{item.title}</p>
        <p className='font-normal font-sans text-base'>{item.price}</p>
        </div>
    )): "cart is empty"}
  </div>
  </div>
  );
}
export default Cart;
{/* {ProductData.map((arr, index) => (
    <div key={index} className='flex flex-col justify-center items-center mt-3 p-2 gap-2 border shadow-inner mx-2 bg-slate-300 rounded-md' >
        <Image className='w-full h-200 px-2' src={arr.imageurl} alt="image" width={800} height={800} />
        <p className='font-normal font-sans text-base'>{arr.title}</p>
        <p className='font-normal font-sans text-base'>{arr.price}</p>
      </div>
    ))} */}