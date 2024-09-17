"use client";

import Link from "next/link";
import { FaShoppingBag, FaHeart, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import Image from 'next/image'; // Add this import

type FeaturedProduct = {
  id: number;
  name: string;
  price: number;
  imageFront: string;
  imageBack: string;
};

export default function FeaturedProducts() {
  const [addedToCart, setAddedToCart] = useState<number[]>([]);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const featuredProducts: FeaturedProduct[] = [
    { id: 1, name: "T-Shirt", price: 1999, imageFront: "/images/tshirt-front.jpg", imageBack: "/images/tshirt-back.jpg" },
    { id: 2, name: "Jeans", price: 3999, imageFront: "/images/jeans-front.jpg", imageBack: "/images/jeans-back.jpg" },
    { id: 4, name: "Sweater", price: 3499, imageFront: "/images/sweater-front.jpg", imageBack: "/images/sweater-back.jpg" },
    { id: 6, name: "Sweatshirt", price: 2999, imageFront: "/images/sweatshirt-front.jpg", imageBack: "/images/sweatshirt-back.jpg" },
  ];

  const toggleWishlist = (product: FeaturedProduct) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product: FeaturedProduct) => {
    addToCart({ ...product, quantity: 1 });
    setAddedToCart((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedToCart((prev) => prev.filter((id) => id !== product.id));
    }, 2000);
  };

  return (
    <section>
      <h2 className='text-2xl font-serif font-bold mb-6'>Featured Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className='bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors relative'
          >
            <button
              onClick={() => toggleWishlist(product)}
              className='absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors z-10 bg-gray-800 p-2 rounded-full'
            >
              <FaHeart
                className={isInWishlist(product.id) ? "text-red-500" : ""}
              />
            </button>
            <Link href={`/products/${product.id}`}>
              <div className="relative w-full h-56 mb-4 group">
                <Image
                  src={product.imageFront}
                  alt={`${product.name} front view`}
                  layout="fill"
                  objectFit="contain"
                  className="transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                />
                <Image
                  src={product.imageBack}
                  alt={`${product.name} back view`}
                  layout="fill"
                  objectFit="contain"
                  className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                />
              </div>
              <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
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
    </section>
  );
}
