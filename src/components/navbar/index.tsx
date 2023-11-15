import React, { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineHeart } from 'react-icons/hi';
import SignUpModal from '@/features/modals';
import LoginModal from '@/features/modals2';
import { useNavigate } from 'react-router-dom';
import { navbarItems } from '@/data/navItems';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenSignUpModal = () => setSignUpModalOpen(true);
  const handleCloseSignUpModal = () => setSignUpModalOpen(false);
  const handleOpenLoginModal = () => setLoginModalOpen(true);
  const handleCloseLoginModal = () => setLoginModalOpen(false);

  // Check screen width and close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="w-full h-[100px] bg-white text-primary flex items-center justify-between py-4 px-6 fixed top-0 left-0 z-10 shadow-md m-0 p-0">
      <h2
        role="button"
        onClick={() => navigate('/')}
        className="text-[40px] font-semibold font-faustina ml-[45px] "
      >
        HouseMarket
      </h2>
      <div className="lg:hidden">
        <HiOutlineMenu
          size={32}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-pointer"
        />
      </div>
      {window.innerWidth > 768 ? (
        // Render items directly on larger screens
        <div className="hidden lg:flex items-center gap-16 text-md">
          {navbarItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <span className="font-[550] uppercase">{item.title}</span>
            </Link>
          ))}
          <div className="px-2">
            <HiOutlineHeart
              role="button"
              size={28}
              onClick={() => navigate('/features/favourites')}
            />
          </div>
          <div className="flex items-center gap-3 text-sm">
            <button
              type="button"
              className="h-[45px] mr-[20px] border-2 border-primary uppercase py-1.5 rounded w-[100px] font-normal hover:bg-[#070058] hover:text-white transition-all duration-500"
              onClick={handleOpenLoginModal}
            >
              Login
            </button>
            <button
              className="mr-[50px] h-[45px] bg-[#070058] border-2 border-primary text-white py-1.5 px-4 font-normal rounded-md hover:bg-white hover:text-[#070058] font-normal hover:border-2 border-primary transition-all duration-500"
              onClick={handleOpenSignUpModal}
            >
              SIGN UP
            </button>
          </div>
        </div>
      ) : (
        // Render mobile menu on smaller screens
        <section
          className={`flex items-center gap-16 text-md ${
            isMobileMenuOpen ? 'flex-col bg-white fixed inset-0 pt-20' : 'hidden'
          }`}
        >
          {navbarItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <span className="font-[550] uppercase">{item.title}</span>
            </Link>
          ))}
          <div className="px-2">
            <HiOutlineHeart
              role="button"
              size={28}
              onClick={() => navigate('/features/favourites')}
            />
          </div>
          <div className="flex items-center gap-3 text-sm">
            <button
              type="button"
              className="h-[45px] mr-[20px] border-2 border-primary uppercase py-1.5 rounded w-[100px] font-normal hover:bg-[#070058] hover:text-white transition-all duration-500"
              onClick={handleOpenLoginModal}
            >
              Login
            </button>
            <button
              className="mr-[50px] h-[45px] bg-[#070058] border-2 border-primary text-white py-1.5 px-4 font-normal rounded-md hover:bg-white hover:text-[#070058] font-normal hover:border-2 border-primary transition-all duration-500"
              onClick={handleOpenSignUpModal}
            >
              SIGN UP
            </button>
          </div>
        </section>
      )}
      <SignUpModal isOpen={isSignUpModalOpen} onClose={handleCloseSignUpModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </nav>
  );
};
