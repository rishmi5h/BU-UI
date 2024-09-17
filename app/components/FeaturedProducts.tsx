import Link from 'next/link'

export default function FeaturedProducts() {
  const featuredProducts = [
    { id: 1, name: 'Black T-Shirt', price: 29.99 },
    { id: 2, name: 'Black Jeans', price: 59.99 },
    { id: 3, name: 'Black Dress', price: 79.99 },
  ]

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="bg-gray-900 p-4 rounded hover:bg-gray-800 transition-colors">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mt-2">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}