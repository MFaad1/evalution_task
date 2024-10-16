"use client";
import Image from "next/image";
import React from "react";

const CardData = [
  { image: "/images/Container4.png", title: "Misbah", price: 20 },
  { image: "/images/Container4.png", title: "Sara", price: 30 },
  { image: "/images/Container4.png", title: "Ali", price: 25 },
];

const Cart: React.FC = () => {

  const handleAddToCart = (product: { image: string; title: string; price: number }) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

    const productIndex = existingCart.findIndex((item: { title: string }) => item.title === product.title);

    if (productIndex !== -1) {
      existingCart[productIndex].quantity = existingCart[productIndex].quantity + 1;
    } else {
      existingCart.push({ ...product, quantity: 1 }); 
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Trigger storage event manually to update header cart count
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {CardData.map((product, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 pb-3"
        >
          <Image
            width={400}
            height={400}
            className="w-full h-48 object-cover"
            src={product.image}
            alt={product.title}
          />
          <div className="px-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {product.title}
            </h3>
            <p className="text-gray-500 mt-2">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;