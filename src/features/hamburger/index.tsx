import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineX, HiOutlineHeart } from 'react-icons/hi';
import { navbarItems } from '@/data/navItems';
import { Link, useNavigate } from 'react-router-dom';
import SignUpModal from '@/features/modals';
import LoginModal from '@/features/modals2';

interface NavbarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavbarModal: React.FC<NavbarModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpenSignUpModal = () => setSignUpModalOpen(true);
  const handleCloseSignUpModal = () => setSignUpModalOpen(false);
  const handleOpenLoginModal = () => setLoginModalOpen(true);
  const handleCloseLoginModal = () => setLoginModalOpen(false);

  const handleLinkClick = () => {
    onClose();
  };

  const handleButtonLoginClick = () => {
    handleOpenLoginModal();
    onClose();
  };

  const handleButtonSignUpClick = () => {
    handleOpenSignUpModal();
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center lg:hidden">
          <div ref={modalRef} className="bg-white p-4 rounded-md h-[600px] w-2/3 md:w-1/2 mt-[-397px] flex flex-col gap-10 items-center justify-center">
            <HiOutlineX
              className="cursor-pointer mb-4"
              size={24}
              onClick={onClose}
            />
            {navbarItems.map((item, index) => (
              <Link key={index} to={item.path} onClick={handleLinkClick}>
                <span className="font-[550] uppercase mb-4">
                  {item.title}
                </span>
              </Link>
            ))}
            <div className="px-2">
              <HiOutlineHeart
                role="button"
                size={28}
                onClick={() => navigate('/features/favourites')}
              />
            </div>
            <div className="flex items-center gap-3 text-sm mt-4 ml-[40px]">
              <button
                type="button"
                className="h-[45px] mr-[20px] border-2 border-primary uppercase py-1.5 rounded w-[100px] font-normal hover:bg-[#070058] hover:text-white transition-all duration-500"
                onClick={handleButtonLoginClick}
              >
                Login
              </button>
              <button
                className="mr-[50px] h-[45px] bg-[#070058] border-2 border-primary text-white py-1.5 px-4 font-normal rounded-md hover:bg-white hover:text-[#070058] font-normal hover:border-2 border-primary transition-all duration-500"
                onClick={handleButtonSignUpClick}
              >
                SIGN UP
              </button>
            </div>
            <SignUpModal
              isOpen={isSignUpModalOpen}
              onClose={handleCloseSignUpModal}
            />
            <LoginModal
              isOpen={isLoginModalOpen}
              onClose={handleCloseLoginModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarModal;
