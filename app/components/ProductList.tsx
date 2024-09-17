"use client";

import Link from "next/link";
import { FaHeart, FaShoppingBag, FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

type Product = {
  id: number;
  name: string;
  price: number;
  gender: "Men" | "Women" | "Unisex";
  size: string[];
  type: string;
};

export default function ProductList({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [addedToCart, setAddedToCart] = useState<number[]>([]);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const filtered = initialProducts.filter((product) =>
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedGenders.length === 0 || selectedGenders.includes(product.gender)) &&
      (selectedSizes.length === 0 || product.size.some(size => selectedSizes.includes(size))) &&
      (selectedTypes.length === 0 || selectedTypes.includes(product.type))
    );
    setFilteredProducts(filtered);
  }, [initialProducts, priceRange, selectedGenders, selectedSizes, selectedTypes]);

  const toggleFilter = (
    value: string,
    currentState: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (currentState.includes(value)) {
      setter(currentState.filter((item) => item !== value));
    } else {
      setter([...currentState, value]);
    }
  };

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
    setAddedToCart((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedToCart((prev) => prev.filter((id) => id !== product.id));
    }, 2000);
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-1/4 mb-6 md:mb-0 md:mr-6'>
        <div className='bg-gray-900 p-6 rounded-lg shadow-lg'>
          <h2 className='text-2xl font-serif font-bold mb-4'>Filters</h2>
          <div className='space-y-4'>
            <div>
              <label className='block mb-2 text-sm font-semibold'>Price Range</label>
              <input
                type='range'
                min='0'
                max='10000'
                step='100'
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className='w-full accent-white'
              />
              <div className='flex justify-between text-sm mt-1'>
                <span>₹0</span>
                <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
              </div>
            </div>
            <div>
              <label className='block mb-2 text-sm font-semibold'>Gender</label>
              <div className='flex flex-wrap gap-2'>
                {["Men", "Women", "Unisex"].map((gender) => (
                  <button
                    key={gender}
                    onClick={() => toggleFilter(gender, selectedGenders, setSelectedGenders)}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedGenders.includes(gender)
                        ? 'bg-white text-black'
                        : 'border-gray-600 hover:border-white'
                    }`}
                  >
                    {gender}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className='block mb-2 text-sm font-semibold'>Size</label>
              <div className='flex flex-wrap gap-2'>
                {["S", "M", "L", "XL", "30", "32", "34"].map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleFilter(size, selectedSizes, setSelectedSizes)}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedSizes.includes(size)
                        ? 'bg-white text-black'
                        : 'border-gray-600 hover:border-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className='block mb-2 text-sm font-semibold'>Type</label>
              <div className='flex flex-wrap gap-2'>
                {["Top", "Bottom", "Dress", "Outerwear"].map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                    className={`px-3 py-1 text-sm rounded-full border ${
                      selectedTypes.includes(type)
                        ? 'bg-white text-black'
                        : 'border-gray-600 hover:border-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full md:w-3/4'>
        <h1 className='text-3xl font-serif font-bold mb-8'>Our Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className='bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors relative'
            >
              <button
                onClick={() => toggleWishlist(product)}
                className='absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors'
              >
                <FaHeart
                  className={isInWishlist(product.id) ? "text-red-500" : ""}
                />
              </button>
              <Link href={`/products/${product.id}`}>
                <h2 className='text-xl font-semibold mb-2'>{product.name}</h2>
                <p className='text-gray-400 mb-2'>
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
                <p className='text-gray-400 mb-2'>{product.gender}</p>
                <p className='text-gray-400 mb-4'>{product.type}</p>
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
      </div>
    </div>
  );
}
