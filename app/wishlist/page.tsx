"use client";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { FaTrash, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: (typeof wishlist)[0]) => {
    addToCart({ ...item, quantity: 1 });
    removeFromWishlist(item.id);
  };

  return (
    <div>
      <h1 className='text-3xl font-serif font-bold mb-8'>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className='space-y-4'>
          {wishlist.map((item) => (
            <div
              key={item.id}
              className='flex items-center justify-between bg-gray-900 p-4 rounded-lg'
            >
              <div className='flex items-center'>
                <div className='relative w-20 h-20 mr-4'>
                  <Image
                    src={item.imageFront}
                    alt={item.name}
                    layout='fill'
                    objectFit='cover'
                    className='rounded'
                  />
                </div>
                <div>
                  <h2 className='text-xl font-semibold'>{item.name}</h2>
                  <p className='text-gray-400'>
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <button
                  onClick={() => handleAddToCart(item)}
                  className='bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm uppercase tracking-wide font-bold flex items-center'
                >
                  <FaShoppingBag className='mr-2' />
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className='text-red-500 hover:text-red-600'
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='mt-8'>
        <Link
          href='/products'
          className='bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm uppercase tracking-wide font-bold'
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
