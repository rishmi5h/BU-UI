"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempted with:", { email, password });
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign-in logic here
    console.log("Google sign-in attempted");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-serif font-bold mb-8">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
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
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors"
        >
          Login
        </button>
      </form>
      <div className="mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors flex items-center justify-center"
        >
          <FaGoogle className="mr-2" />
          Sign in with Google
        </button>
      </div>
      <p className="mt-4 text-center">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-white hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}