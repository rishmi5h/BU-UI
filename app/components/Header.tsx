import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black py-6 border-b border-gray-800">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-3xl font-bold">Black Unlimited</Link>
        <ul className="flex space-x-6 text-sm uppercase tracking-wide">
          <li><Link href="/products" className="hover:text-gray-300 transition-colors">Products</Link></li>
          <li><Link href="/cart" className="hover:text-gray-300 transition-colors">Cart</Link></li>
          <li><Link href="/wishlist" className="hover:text-gray-300 transition-colors">Wishlist</Link></li>
          <li><Link href="/login" className="hover:text-gray-300 transition-colors">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}