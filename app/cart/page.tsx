"use client";

import { useCart } from "../context/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className='text-3xl font-serif font-bold mb-8'>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className='space-y-4'>
            {cart.map((item) => (
              <div
                key={item.id}
                className='flex items-center justify-between bg-gray-900 p-4 rounded-lg'
              >
                <div>
                  <h2 className='text-xl font-semibold'>{item.name}</h2>
                  <p className='text-gray-400'>₹{item.price.toLocaleString('en-IN')}</p>
                </div>
                <div className='flex items-center space-x-4'>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className='text-gray-400 hover:text-white'
                  >
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className='text-gray-400 hover:text-white'
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='text-red-500 hover:text-red-600'
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-8'>
            <p className='text-2xl font-bold'>Total: ₹{total.toLocaleString('en-IN')}</p>
            <div className='mt-4 space-x-4'>
              <button
                onClick={clearCart}
                className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors'
              >
                Clear Cart
              </button>
              <button className='bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors'>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
