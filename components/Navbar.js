import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(router.pathname);

  const handleNavigation = (url) => {
    setActiveButton(url);
    router.push(url);
  };

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center py-3 px-16 z-50" style={{ backgroundColor: '#398D66' }}>
      {/* Logo */}
      <div className="ml-12 flex items-center space-x-3">
        <Image src="/images/logo-2.svg" alt="YLN Logo" width={50} height={50} />
        <span className="text-white font-semibold text-lg tracking-wide"></span> {/* Text color changed to white */}
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-8 text-sm font-medium tracking-wide">
        <button
          onClick={() => handleNavigation('/why-academy')}
          className={`cursor-pointer text-sm px-5 py-2.5 rounded-lg font-medium tracking-wide transition ${
            activeButton === '/why-academy' ? 'bg-[#8FA68E] text-white' : 'text-white hover:bg-[#F5E6DA] hover:text-[#398D66]'
          }`}
        >
          Why Academy?
        </button>
        <button
          onClick={() => handleNavigation('/academy-for')}
          className={`cursor-pointer text-sm px-5 py-2.5 rounded-lg font-medium tracking-wide transition ${
            activeButton === '/academy-for' ? 'bg-[#8FA68E] text-white' : 'text-white hover:bg-[#F5E6DA] hover:text-[#398D66]'
          }`}
        >
          Who is Academy for?
        </button>
        <button
          onClick={() => handleNavigation('/contactus')}
          className={`cursor-pointer text-sm px-5 py-2.5 rounded-lg font-medium tracking-wide transition ${
            activeButton === '/contact' ? 'bg-[#8FA68E] text-white' : 'text-white hover:bg-[#F5E6DA] hover:text-[#398D66]'
          }`}
        >
          Contact Us
        </button>
      </nav>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => handleNavigation('/schedule-call')}
          className={`cursor-pointer text-sm px-5 py-2.5 rounded-lg font-medium tracking-wide transition ${
            activeButton === '/schedule-call' ? 'bg-[#CDBAA7] text-white' : 'bg-[#CDBAA7] text-white hover:opacity-80'
          }`}
        >
          SCHEDULE CALL
        </button>

        <button
          onClick={() => handleNavigation('/demo')}
          className={`cursor-pointer text-sm px-5 py-2.5 rounded-lg font-medium tracking-wide transition ${
            activeButton === '/demo' ? 'bg-[#183D3D] text-white' : 'bg-[#2D7351] text-white hover:opacity-80'
          }`}
        >
          REQUEST A DEMO
        </button>

        <button
          onClick={() => handleNavigation('/login')}
          className={`cursor-pointer text-sm px-5 py-2.5 rounded-lg font-medium tracking-wide transition ${
            activeButton === '/login' ? 'bg-[#183D3D] text-white' : 'bg-[#8FA68E] text-white hover:opacity-80'
          }`}
        >
          LOGIN
        </button>
      </div>
    </header>
  );
};

export default Navbar;
