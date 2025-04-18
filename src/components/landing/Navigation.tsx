import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#6B047C]">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50 transition-transform duration-300 hover:scale-105">
          <img src="/logo.png" alt="LawTrolley" className="w-[155px] h-[47px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            to="/"
            className="text-white text-sm font-medium transition-all duration-300 hover:text-purple-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
          </Link>
          <Link
            to="/"
            className="text-white text-sm font-medium transition-all duration-300 hover:text-purple-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
        >
          About
          </Link>
          <Link
            to="/"
            className="text-white text-sm font-medium transition-all duration-300 hover:text-purple-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact us
          </Link>
          <Link
            to="/"
            className="text-white text-sm font-medium transition-all duration-300 hover:text-purple-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Our marketplace
          </Link>
       <a
  href="https://dashboard-pages-mu.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-2 px-4 py-1.5 bg-white text-[#6B047C] rounded text-sm font-medium transition-all duration-300 hover:bg-purple-100 hover:scale-105 flex items-center gap-1 group"
>
  Get started
  <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
</a>

        </nav>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden z-50 w-[30px] h-[30px] flex flex-col justify-center items-center transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span 
            className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 ease-out
            ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
          />
          <span 
            className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 ease-out my-[6px]
            ${isMenuOpen ? 'opacity-0' : ''}`}
          />
          <span 
            className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 ease-out
            ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
          />
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-[#6B047C] transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden pt-20`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <nav className="flex flex-col items-center gap-8">
              <Link
                to="/"
                className="text-white text-2xl font-medium transition-all duration-300 hover:text-purple-200 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white text-2xl font-medium transition-all duration-300 hover:text-purple-200 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white text-2xl font-medium transition-all duration-300 hover:text-purple-200 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMenu}
        >
          Contact us
              </Link>
              <Link
                to="/marketplace"
                className="text-white text-2xl font-medium transition-all duration-300 hover:text-purple-200 hover:scale-105 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-200 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                onClick={closeMenu}
        >
          Our marketplace
              </Link>
              <Link
                to="/get-started"
                className="mt-4 px-8 py-3 bg-white text-[#6B047C] rounded-md text-xl transition-all duration-300 hover:bg-purple-100 hover:scale-105 flex items-center gap-2 group"
                onClick={closeMenu}
              >
                Get started
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
      </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
