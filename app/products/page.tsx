import Link from 'next/link'

export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Black T-Shirt', price: 29.99 },
    { id: 2, name: 'Black Jeans', price: 59.99 },
    { id: 3, name: 'Black Dress', price: 79.99 },
    { id: 4, name: 'Black Sweater', price: 49.99 },
    { id: 5, name: 'Black Jacket', price: 89.99 },
    { id: 6, name: 'Black Skirt', price: 39.99 },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="bg-gray-900 p-4 rounded hover:bg-gray-800 transition-colors">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}