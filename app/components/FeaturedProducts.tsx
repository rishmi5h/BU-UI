import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function FeaturedProducts() {
  const featuredProducts = [
    { id: 1, name: "Black T-Shirt", price: 29.99 },
    { id: 2, name: "Black Jeans", price: 59.99 },
    { id: 3, name: "Black Dress", price: 79.99 },
  ];

  return (
    <section>
      <h2 className='text-2xl font-serif font-bold mb-6'>Featured Products</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className='bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors'
          >
            <Link href={`/products/${product.id}`}>
              <h3 className='text-xl font-semibold mb-2'>{product.name}</h3>
              <p className='text-gray-400 mb-4'>${product.price.toFixed(2)}</p>
              <button className='flex items-center justify-center w-full bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm uppercase tracking-wide font-bold'>
                <FaShoppingCart className='mr-2' />
                Add to Cart
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
