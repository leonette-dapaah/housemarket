import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineMenu, HiOutlineHeart } from 'react-icons/hi';
import Modal from 'react-modal';
import SignUpModal from '@/components/modals/signup';
import LoginModal from '@/components/modals/signin';
import NavbarModal from '@/features/hamburger';
import { useNavigate } from 'react-router-dom';
import { navbarItems } from '@/data/navItems';
import { Link } from 'react-router-dom';
import { useModalStore } from '@/store/store';
import avatar from "@/assets/images/profile.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { userStore } from '@/store/userStore';
import { userDetails } from '@/store/createUser';
import { logoutApi } from '@/api/auth';

Modal.setAppElement('#root'); // Set the root element for accessibility

export const Navbar = () => {
  const navigate = useNavigate();
  const { activeModal, openModal, closeModal } = useModalStore()

  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isNavbarModalOpen, setNavbarModalOpen] = useState(false);
  const [isMobileModalOpen, setMobileModalOpen] = useState(false);
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  const optionsRef = useRef(null);

  // const { userData, logout } = userStore();
  const { userData } = userStore();
  const { userInfo } = userDetails();

  const handleOpenSignUpModal = () => setSignUpModalOpen(true);
  const handleCloseSignUpModal = () => setSignUpModalOpen(false);
  const handleOpenLoginModal = () => setLoginModalOpen(true);
  const handleCloseLoginModal = () => setLoginModalOpen(false);
  const handleOpenNavbarModal = () => setNavbarModalOpen(true);
  const handleCloseNavbarModal = () => setNavbarModalOpen(false);

  const  userprofilepic = localStorage.getItem('user_img')!==null?localStorage.getItem('user_img'): avatar;
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileModalOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setMobileModalOpen(!isMobileModalOpen);
  };

  const handleLogout = () => {
    logoutApi();
    window.location.reload();
    // ...
  };

  const toggleOptions = () => {
    setOptionsOpen(!isOptionsOpen);
  };
  
  const handleSettings = () => {
    console.log('Settings clicked');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setOptionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
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
            onClick={handleOpenNavbarModal}
            className="cursor-pointer"
          />
        </div>
        {window.innerWidth > 768 ? (
          <div className="hidden lg:flex items-center gap-16 text-md">
            {navbarItems.map((item, index) => (
              <Link key={index} to={item.path}>
                <span className="font-[550] uppercase">{item.title}</span>
              </Link>
            ))}
            <div className="px-2 flex justify-space-between">
              <HiOutlineHeart
                role="button"
                size={28}
                onClick={() => navigate('/features/favourites')}
              />
              <div className='bg-red-600 w-[22px] h-[22px] rounded-full ml-[-10px] mt-[-5px] cursor-pointer' onClick={() => navigate('/features/favourites')}>
                <p className='text-white font-bold flex justify-center items-center'>2</p>
              </div>
            </div>
            
            {localStorage.getItem('user_name') !==null ? (
              <div className="flex items-center gap-3 text-sm">
                <div className='flex justify-space-between gap-5 mr-[100px]'>
                  <div className='h-[30px] w-[30px] rounded-lg relative  border-2 border-solid border-[#070058]'>
                    <img src={avatar} alt="#" className='cursor-pointer' onClick={toggleOptions} />
                    {isOptionsOpen && (
                      <div className="absolute top-[25px] right-[-150px] bg-white border border-gray-200 rounded shadow-md">
                        <button onClick={() => handleLogout()} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Logout</button>
                        <button onClick={handleSettings} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Settings</button>
                      </div>
                    )}
                  </div>
                  <div className='flex items-center'>
                    <p onClick={toggleOptions} className='cursor-pointer text-[20px]'>
                      {localStorage.getItem('user_name')}
                    </p>
                    <IoIosArrowDown className='text-[#070058] flex items-center ml-2' />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 text-sm">
                <button
                  type="button"
                  className="h-[45px] mr-[20px] border-2 border-primary uppercase py-1.5 rounded w-[100px] font-normal hover:bg-[#070058] hover:text-white transition-all duration-500"
                  // onClick={handleOpenLoginModal}
                  onClick={() => openModal('signIn')}
                >
                  Login
                </button>
                <button
                  className="mr-[50px] h-[45px] bg-[#070058] border-2 border-primary text-white py-1.5 px-4 font-normal rounded-md hover:bg-white hover:text-[#070058] font-normal hover:border-2 border-primary transition-all duration-500"
                  // onClick={handleOpenSignUpModal}
                  onClick={() => openModal('signUp')}
                >
                  SIGN UP
                </button>
                {/* <div className='flex justify-space-between gap-5'>
                  <div className='h-[30px] w-[30px] rounded-full relative  border-2 border-solid border-[#070058]'>
                    <img src={avatar} alt="avatar" className='rounded-full cursor-pointer' onClick={toggleOptions} />
                    {isOptionsOpen && (
                      <div className="absolute top-[25px] right-[-150px] bg-white border border-gray-200 rounded shadow-md">
                        <button onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Logout</button>
                        <button onClick={handleSettings} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">Settings</button>
                      </div>
                    )}
                  </div>
                  <div className='flex items-center'>
                    <p onClick={toggleOptions} className='cursor-pointer text-[20px]'>
                      Pearl Adzoko
                    </p>
                    <IoIosArrowDown className='text-[#070058] flex items-center ml-2' />
                  </div>
                </div> */}
              </div>
            )}
            
          </div>
        ) : (
          <section
            className={`flex items-center gap-16 text-md ${
              isMobileModalOpen ? 'flex-col bg-white fixed inset-0 pt-20' : 'hidden'
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
                // onClick={handleOpenLoginModal}
                onClick={() => openModal('signIn')}
              >
                Login
              </button>
              <button
                className="mr-[50px] h-[45px] bg-[#070058] border-2 border-primary text-white py-1.5 px-4 font-normal rounded-md hover:bg-white hover:text-[#070058] font-normal hover:border-2 border-primary transition-all duration-500"
                // onClick={handleOpenSignUpModal}
                onClick={() => openModal('signUp')}
              >
                SIGN UP
              </button>
              <div>
                <div className='h-[15px] w-[15px]'>
                    <img src={avatar} alt="avatar" />
                </div>
                <div>
                  <p>Pearl Adzoko</p>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* <SignUpModal isOpen={isSignUpModalOpen} onClose={handleCloseSignUpModal} />
        <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} /> */}
        {activeModal === 'signUp' && <SignUpModal isOpen onClose={closeModal} />}
        {activeModal === 'signIn' && <LoginModal isOpen onClose={closeModal} />}
        <NavbarModal isOpen={isNavbarModalOpen} onClose={handleCloseNavbarModal} />

      </nav>
      <Modal
        isOpen={isMobileModalOpen}
        onRequestClose={() => setMobileModalOpen(false)}
        className="modal"
        overlayClassName="overlay"
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
      </Modal>
    </>
  );
};
