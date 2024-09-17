"use client";

import Link from "next/link";
import { FaHeart, FaShoppingBag, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductsPage() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [addedToCart, setAddedToCart] = useState<number[]>([]);
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Black T-Shirt", price: 1999 },
    { id: 2, name: "Black Jeans", price: 3999 },
    { id: 3, name: "Black Dress", price: 5999 },
    { id: 4, name: "Black Sweater", price: 3499 },
    { id: 5, name: "Black Jacket", price: 6999 },
    { id: 6, name: "Black Skirt", price: 2999 },
  ];

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({ ...product, quantity: 1 });
    setAddedToCart((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedToCart((prev) => prev.filter((id) => id !== product.id));
    }, 2000);
  };

  return (
    <div>
      <h1 className='text-3xl font-serif font-bold mb-8'>Our Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors relative'
          >
            <button
              onClick={() => toggleWishlist(product.id)}
              className='absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors'
            >
              <FaHeart
                className={wishlist.includes(product.id) ? "text-red-500" : ""}
              />
            </button>
            <Link href={`/products/${product.id}`}>
              <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
              <p className='text-gray-400 mb-4'>
                ₹{product.price.toLocaleString("en-IN")}
              </p>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className='flex items-center justify-center w-full bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm uppercase tracking-wide font-bold'
            >
              {addedToCart.includes(product.id) ? (
                <>
                  <FaCheck className='mr-2' />
                  Added to Cart
                </>
              ) : (
                <>
                  <FaShoppingBag className='mr-2' />
                  Add to Bag
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
