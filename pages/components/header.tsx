"use client";
import Link from 'next/link';
import { useState } from 'react'; // Import useState hook
import NewCvButton from './NewCvButton';

const Header = () => {
  // 1. Add state to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex w-full justify-between items-center p-4 md:p-6 lg:p-8 relative z-10" style={{padding:"12px"}}> {/* Added relative and z-10 */}
      {/* Logo and Desktop Navigation */}
      <div className="flex items-center gap-12">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2224 15.1869L15.0463 17.1513C15.6422 17.5658 16.4583 17.1394 16.4583 16.4134C16.4583 15.7117 17.2267 15.2806 17.8256 15.6464L20.3763 17.2043C21.0427 17.6113 21.8975 17.1318 21.8975 16.3509V15.8113C21.8975 15.259 22.3487 14.8201 22.894 14.7323C25.481 14.3161 27.1616 12.3487 27.8457 11.1014C27.9524 10.9069 27.9733 10.6763 27.9191 10.4612C26.0786 3.15015 20.1458 0.594935 16.6279 0.0916755C16.1034 0.0166348 15.6624 0.44166 15.6624 0.97155C15.6624 1.49948 15.2221 1.92073 14.6943 1.91277C4.25884 1.75551 4.30879 5.61761 1.73285 8.30542C-0.920389 11.0739 -1.84902 25.6084 8.8966 27.6847C16.7718 29.2064 19.7557 24.881 20.439 21.945C20.5429 21.4988 20.2697 21.0673 19.8401 20.9082L17.408 20.0078C16.8855 19.8143 16.311 20.0906 16.0775 20.5965C14.3082 24.4307 11.4876 23.8824 8.8966 21.1788C6.87524 19.0697 9.28433 16.4975 11.1357 15.1765C11.4607 14.9447 11.8947 14.959 12.2224 15.1869Z"
            fill="#167FFC"
          />
          <ellipse cx="19.6008" cy="7.58341" rx="2.8" ry="2.91667" fill="white" />
          <ellipse cx="20.1591" cy="6.99992" rx="1.12" ry="1.16667" fill="#167FFC" />
        </svg>
        {/* Desktop Navigation - Hidden on small screens, flex on md and up */}
        <nav className="hidden md:flex gap-4 lg:gap-6 text-gray-600 font-semibold cursor-pointer text-sm md:text-base" >
          <Link href="/templates">إنشاء سيرة ذاتية</Link>
          <Link href="/templates">قوالب سيرة ذاتية</Link>
          <Link href="/blogs" className='text-blue-600'>نصائح إنشاء سيرة ذاتية</Link>
        </nav>
      </div>
     
      {/* New CV Button - Hidden on small screens, block on md and up */}
      <div className="hidden md:block">
        <NewCvButton />
      </div>

      {/* Mobile Menu Button (Hamburger Icon) - Shown only on small screens */}
      <div className="md:hidden">
        <button
          className="text-gray-600 focus:outline-none"
          onClick={toggleMobileMenu} // Attach the click handler here
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6 w-6 h-6 text-gray-600"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* Conditional rendering for hamburger or close icon */}
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> // Close icon (X)
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && ( // 3. Conditionally render based on state
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4" style={{padding:"24px"}}> {/* Position below header */}
          <nav className="flex flex-col items-center gap-4 text-gray-800 font-semibold">
            <Link href="/templates" onClick={toggleMobileMenu}>إنشاء سيرة ذاتية</Link>
            <Link href="/templates" onClick={toggleMobileMenu}>قوالب سيرة ذاتية</Link>
            <Link href="/blogs" className='text-blue-600' onClick={toggleMobileMenu}>نصائح إنشاء سيرة ذاتية</Link>
            {/* Optionally, add the NewCvButton for mobile here */}
            <div className="mt-4">
              <NewCvButton />
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
