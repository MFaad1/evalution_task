"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleDelete = (index: number) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {cartItems && cartItems.map((product, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <Image
            width={400}
            height={400}
            className="w-full h-48 object-cover"
            src={product.image}
            alt={product.title}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {product.title} ({product.quantity})
            </h3>
            <p className="text-gray-500 mt-2">${product.price}</p>
            <button
              className="bg-red-600 text-white rounded-md w-full"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;