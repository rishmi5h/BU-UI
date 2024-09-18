"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const { clearCart } = useCart();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log("Order submitted:", formData);
    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='name' className='block mb-1'>
          Full Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='w-full px-3 py-2 bg-gray-900 rounded'
        />
      </div>
      <div>
        <label htmlFor='email' className='block mb-1'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='w-full px-3 py-2 bg-gray-900 rounded'
        />
      </div>
      <div>
        <label htmlFor='address' className='block mb-1'>
          Address
        </label>
        <input
          type='text'
          id='address'
          name='address'
          value={formData.address}
          onChange={handleChange}
          required
          className='w-full px-3 py-2 bg-gray-900 rounded'
        />
      </div>
      <div>
        <label htmlFor='city' className='block mb-1'>
          City
        </label>
        <input
          type='text'
          id='city'
          name='city'
          value={formData.city}
          onChange={handleChange}
          required
          className='w-full px-3 py-2 bg-gray-900 rounded'
        />
      </div>
      <div>
        <label htmlFor='postalCode' className='block mb-1'>
          Postal Code
        </label>
        <input
          type='text'
          id='postalCode'
          name='postalCode'
          value={formData.postalCode}
          onChange={handleChange}
          required
          className='w-full px-3 py-2 bg-gray-900 rounded'
        />
      </div>
      <button
        type='submit'
        className='w-full bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors'
      >
        Place Order
      </button>
    </form>
  );
}
