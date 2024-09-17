import Link from 'next/link'
import FeaturedProducts from './components/FeaturedProducts'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Black Unlimited</h1>
        <p className="text-xl">Elevate your style with our minimalist black clothing collection</p>
      </section>
      <FeaturedProducts />
      <section className="text-center">
        <Link href="/products" className="inline-block bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors">
          View All Products
        </Link>
      </section>
    </div>
  )
}
