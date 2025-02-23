import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='max-w-full grid md:grid-cols-3 justify-center items-center px-3 bg-green-300'>
        <div className='flex justify-start items-center'>
        <Image className='h-[109px] w-[154px]' src="/images/B&C.png" alt="img" height={800} width={800}></Image></div>
        <div className='w-full flex justify-center items-center gap-5 text-sm md:text-base font-medium '>
        <div className='cursor-pointer'><Link href="/">Home</Link></div>
        <div className='cursor-pointer'><Link href="/about">About</Link></div>
        <div className='cursor-pointer'><Link href="/cart">Cart</Link></div>
        <div className='cursor-pointer'><Link href="/profile">Profile</Link></div>
        <div className='cursor-pointer'><Link href="/wishlist">Wishlist</Link></div>
        </div>
        <div className='flex justify-end items-center py-2'><button className='h-5 w-5'><FaRegHeart /></button></div>
        </div>

  )
};



export default Header; 