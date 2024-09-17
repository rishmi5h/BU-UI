"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  gender: "Men" | "Women" | "Unisex";
  size: string[];
  type: string;
  imageFront: string;
  imageBack: string;
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(parseInt(params.id));
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({ ...product, quantity: 1, size: selectedSize });
      // You might want to add some feedback here, like a toast notification
    } else {
      alert("Please select a size before adding to cart");
    }
  };

  return (
    <div className='flex flex-col md:flex-row gap-8'>
      <div className='md:w-1/2'>
        <div className='relative w-full h-96 md:h-[600px]'>
          <Image
            src={product.imageFront}
            alt={`${product.name} front view`}
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='relative w-full h-96 md:h-[600px] mt-4'>
          <Image
            src={product.imageBack}
            alt={`${product.name} back view`}
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='md:w-1/2'>
        <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
        <p className='text-xl mb-4'>₹{product.price.toLocaleString("en-IN")}</p>
        <p className='mb-4'>Gender: {product.gender}</p>
        <p className='mb-4'>Type: {product.type}</p>
        <div className='mb-4'>
          <p className='mb-2'>Size:</p>
          <div className='flex gap-2'>
            {product.size.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 border rounded ${
                  selectedSize === size
                    ? "bg-white text-black"
                    : "border-gray-600 hover:border-white"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className='flex items-center justify-center bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors'
        >
          <FaShoppingBag className='mr-2' />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function getProductById(id: number): Product | undefined {
  const products: Product[] = [
    {
      id: 1,
      name: "T-Shirt",
      price: 1999,
      gender: "Unisex",
      size: ["S", "M", "L"],
      type: "Top",
      imageFront: "/images/tshirt-front.jpg",
      imageBack: "/images/tshirt-back.jpg",
    },
    {
      id: 2,
      name: "Jeans",
      price: 3999,
      gender: "Men",
      size: ["30", "32", "34"],
      type: "Bottom",
      imageFront: "/images/jeans-front.jpg",
      imageBack: "/images/jeans-back.jpg",
    },
    {
      id: 3,
      name: "Dress",
      price: 5999,
      gender: "Women",
      size: ["S", "M", "L"],
      type: "Dress",
      imageFront: "/images/dress-front.jpg",
      imageBack: "/images/dress-back.jpg",
    },
    {
      id: 4,
      name: "Sweater",
      price: 3499,
      gender: "Unisex",
      size: ["M", "L", "XL"],
      type: "Top",
      imageFront: "/images/sweater-front.jpg",
      imageBack: "/images/sweater-back.jpg",
    },
    {
      id: 5,
      name: "Jacket",
      price: 6999,
      gender: "Unisex",
      size: ["S", "M", "L", "XL"],
      type: "Outerwear",
      imageFront: "/images/jacket-front.jpg",
      imageBack: "/images/jacket-back.jpg",
    },
    {
      id: 6,
      name: "Sweatshirt",
      price: 2999,
      gender: "Unisex",
      size: ["S", "M", "L", "XL"],
      type: "Top",
      imageFront: "/images/sweatshirt-front.jpg",
      imageBack: "/images/sweatshirt-back.jpg",
    },
  ];
  return products.find((p) => p.id === id);
}
