'use client';

import Link from "next/link";
import { FaSearch, FaShoppingBag, FaHeart, FaUser } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className='bg-black py-6 border-b border-gray-800'>
      <nav className='container mx-auto px-4 flex justify-between items-center'>
        <Link href='/' className='font-serif text-3xl font-bold'>
          BU
        </Link>
        <div className='flex items-center space-x-6'>
          <form className='relative'>
            <input
              type='text'
              placeholder='Search...'
              className='bg-gray-900 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white'
            />
            <button
              type='submit'
              className='absolute right-3 top-1/2 transform -translate-y-1/2'
            >
              <FaSearch className='text-gray-400' />
            </button>
          </form>
          <ul className='flex space-x-6 text-sm uppercase tracking-wide'>
            <li>
              <Link
                href='/cart'
                className='hover:text-gray-300 transition-colors relative'
              >
                <FaShoppingBag />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                href='/wishlist'
                className='hover:text-gray-300 transition-colors'
              >
                <FaHeart />
              </Link>
            </li>
            <li>
              <Link
                href='/login'
                className='hover:text-gray-300 transition-colors'
              >
                <FaUser />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
