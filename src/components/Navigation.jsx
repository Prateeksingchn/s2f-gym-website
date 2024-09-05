import React, { useState, useEffect } from 'react';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-[95%] ml-4 z-50 transition-all rounded-xl duration-300 ${isScrolled ? 'bg-white shadow-md dark:bg-gray-900' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="h-6 w-6 rounded-full bg-red-600 dark:bg-red-400"></div>
                <div className="h-8 w-2 bg-gray-900 dark:bg-white"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">S2F</span>
            </a>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-4">
              {['Classes', 'Facilities', 'Trainers', 'Membership'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
            >
              Join Now
            </a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${navOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${navOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`lg:hidden ${navOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['Classes', 'Facilities', 'Trainers', 'Membership'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="block w-full px-4 py-2 text-center font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-300"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;