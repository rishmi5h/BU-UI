import './globals.css'
import { Playfair_Display, Lato } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato' })

export const metadata = {
  title: 'Black Unlimited - Minimalist Fashion',
  description: 'Discover our collection of elegant black clothing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-black text-white min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
