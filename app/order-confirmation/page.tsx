import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-serif font-bold mb-8">Order Confirmed</h1>
      <p className="mb-8">Thank you for your purchase! Your order has been received and is being processed.</p>
      <Link href="/" className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors">
        Continue Shopping
      </Link>
    </div>
  );
}
