import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-black py-8 border-t border-gray-800'>
      <div className='container mx-auto px-4 text-center'>
        <div className='flex justify-center space-x-6 mb-4'>
          <a
            href='#'
            className='text-gray-400 hover:text-white transition-colors'
          >
            <FaFacebookF />
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-white transition-colors'
          >
            <FaTwitter />
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-white transition-colors'
          >
            <FaInstagram />
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-white transition-colors'
          >
            <FaPinterest />
          </a>
        </div>
        <p className='text-sm text-gray-400'>
          &copy; 2024 Black Unlimited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
