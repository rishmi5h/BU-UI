import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900 py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Black Unlimited</Link>
        <ul className="flex space-x-4">
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/cart">Cart</Link></li>
          <li><Link href="/wishlist">Wishlist</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}