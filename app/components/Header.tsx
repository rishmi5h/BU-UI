"use client";

import Link from "next/link";
import {
  FaSearch,
  FaShoppingBag,
  FaHeart,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Header() {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className='bg-black py-4 sm:py-6 border-b border-gray-800'>
      <nav className='container mx-auto px-4 flex justify-between items-center'>
        <Link href='/' className='font-serif text-2xl sm:text-3xl font-bold'>
          BU
        </Link>
        <div className='flex items-center'>
          <div className='relative mr-4 sm:mr-6'>
            {isSearchOpen ? (
              <form className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='bg-gray-900 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white w-48 sm:w-64'
                />
                <button
                  type='button'
                  onClick={toggleSearch}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white'
                >
                  <FaTimes className='text-lg sm:text-xl' />
                </button>
              </form>
            ) : (
              <button
                onClick={toggleSearch}
                className='text-gray-400 hover:text-white transition-colors flex items-center justify-center w-8 h-8'
              >
                <FaSearch className='text-xl sm:text-2xl' />
              </button>
            )}
          </div>
          <ul className='flex items-center space-x-4 sm:space-x-6'>
            <li>
              <Link
                href='/cart'
                className='hover:text-gray-300 transition-colors relative flex items-center justify-center w-8 h-8'
              >
                <FaShoppingBag className='text-xl sm:text-2xl' />
                {cartItemsCount > 0 && (
                  <span className='absolute -top-1 -right-1 bg-white text-black rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs'>
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                href='/wishlist'
                className='hover:text-gray-300 transition-colors flex items-center justify-center w-8 h-8'
              >
                <FaHeart className='text-xl sm:text-2xl' />
              </Link>
            </li>
            <li>
              <Link
                href='/login'
                className='hover:text-gray-300 transition-colors flex items-center justify-center w-8 h-8'
              >
                <FaUser className='text-xl sm:text-2xl' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
