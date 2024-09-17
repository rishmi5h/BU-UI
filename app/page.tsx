import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <div className='space-y-16'>
      <section className='text-center'>
        <h1 className='font-serif text-5xl font-bold mb-6'>Black Unlimited</h1>
        <p className='text-xl font-light max-w-2xl mx-auto'>
          Elevate your style with our curated collection of minimalist black
          clothing
        </p>
      </section>
      <FeaturedProducts />
      <section className='text-center'>
        <Link
          href='/products'
          className='inline-flex items-center bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors text-sm uppercase tracking-wide font-bold'
        >
          Explore All Products
          <FaArrowRight className='ml-2' />
        </Link>
      </section>
    </div>
  );
}
