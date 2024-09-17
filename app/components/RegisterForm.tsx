"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaGoogle } from "react-icons/fa";

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the registration logic
    console.log('Registration submitted:', { name, email, password });
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Google sign-in attempted");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-serif font-bold mb-8">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors">
          Register
        </button>
      </form>
      <div className="mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors flex items-center justify-center"
        >
          <FaGoogle className="mr-2" />
          Sign up with Google
        </button>
      </div>
      <p className="mt-4 text-center">
        Already have an account? <Link href="/login" className="text-white hover:underline">Login here</Link>
      </p>
    </div>
  );
}