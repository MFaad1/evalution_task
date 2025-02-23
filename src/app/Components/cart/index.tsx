'use client'
import React from 'react'
import Image from 'next/image';
import { ProductData } from '@/app/data';
// import Link from 'next/link';

const add_to_cart_handler =(product:{imageurl?: any;title:string;price:string;})=>{
let arrr:any =[]  

const storedcartitems:any =localStorage.getItem('cart');

localStorage.setItem('cart',JSON.stringify(arrr))}

const Cart = () => {
  return (
    <div>
    <h2 className='font-serif text-2xl sm:text-3xl lg:text-4xl font black flex justify-center items-center mt-2'>Home/Produts</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-7'>
    {ProductData.map((arr, index) => (
      <div key={index} className='flex flex-col justify-center items-center mt-3 p-2 gap-2 border shadow-inner mx-2 bg-slate-300 rounded-md' >
        <Image className='w-full h-150' src={arr.imageurl} alt="image" width={800} height={800} />
        <p className='font-normal font-sans text-base'>{arr.title}</p>
        <p className='font-normal font-sans text-base'>{arr.price}</p>
        
        <button className='bg-slate-400 px-2 py-2 flex items-center rounded-md font-sans font-medium' onClick={()=>add_to_cart_handler(arr)}>Add to Cart</button>
         </div>
    ))}
  </div>
  </div>
  );
}

export default Cart;