import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-black py-6 sm:py-8 border-t border-gray-800'>
      <div className='container mx-auto px-4 text-center'>
        <div className='flex justify-center space-x-4 sm:space-x-6 mb-4'>
          <a
            href='#'
            className='text-gray-400 hover:text-white transition-colors'
          >
            <FaFacebookF className="text-xl sm:text-2xl" />
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-white transition-colors'
          >
            <FaTwitter className="text-xl sm:text-2xl" />
          </a>
          <a
            href='https://www.instagram.com/black.unlimited/'
            className='text-gray-400 hover:text-white transition-colors'
            target='_blank'
          >
            <FaInstagram className="text-xl sm:text-2xl" />
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-white transition-colors'
          >
            <FaPinterest className="text-xl sm:text-2xl" />
          </a>
        </div>
        <p className='text-sm sm:text-base text-gray-400'>
          &copy; 2024 Black Unlimited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
