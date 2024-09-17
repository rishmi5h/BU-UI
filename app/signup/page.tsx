export default function SignupPage() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8">Sign Up</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" className="w-full px-3 py-2 bg-gray-900 rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 bg-gray-900 rounded" />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 bg-gray-900 rounded" />
        </div>
        <button type="submit" className="w-full bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors">
          Sign Up
        </button>
      </form>
    </div>
  )
}