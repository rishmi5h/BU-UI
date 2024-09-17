import { notFound } from 'next/navigation'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
      <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors">
        Add to Cart
      </button>
    </div>
  )
}

function getProductById(id: number) {
  const products = [
    { id: 1, name: 'Black T-Shirt', price: 29.99 },
    { id: 2, name: 'Black Jeans', price: 59.99 },
    { id: 3, name: 'Black Dress', price: 79.99 },
    { id: 4, name: 'Black Sweater', price: 49.99 },
    { id: 5, name: 'Black Jacket', price: 89.99 },
    { id: 6, name: 'Black Skirt', price: 39.99 },
  ]
  return products.find(p => p.id === id)
}