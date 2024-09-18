"use client";

import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm";

export default function CheckoutPage() {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl font-serif font-bold mb-8'>Checkout</h1>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} className='flex justify-between mb-2'>
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
          </div>
        ))}
        <div className='border-t border-gray-600 mt-4 pt-4 font-bold'>
          <span>Total: ₹{total.toLocaleString("en-IN")}</span>
        </div>
      </div>
      <CheckoutForm />
    </div>
  );
}
