"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa'

interface HeaderProps {
  className?: string; 
}
const Header: React.FC<HeaderProps> = ({ className }) => {
  const [cartCount, setCartCount] = useState(0);
  const calculateCartCount = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (Array.isArray(storedCart)) {
      const totalItems = storedCart.reduce(
        (acc: number, item: { quantity?: number }) => acc + (item.quantity || 1),
        0
      );
      setCartCount(totalItems);
    } else {
      setCartCount(0);
    }
  };
  useEffect(() => {
    calculateCartCount(); 
    const handleStorageChange = () => {
      calculateCartCount();
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 
  return (
    <header className={`${className} bg-gray-800 text-white p-4`}>
      <div className="flex justify-between">
        <div className="text-lg font-bold">E-Commerce</div>
        <div className="space-x-4 flex items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/wishlist">Wishlist
          </Link>
          <Link href="/cart" className="relative">
            <FaShoppingCart /> Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;