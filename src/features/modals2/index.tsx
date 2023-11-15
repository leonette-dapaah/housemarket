import React, { useState, useRef, useEffect } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const modalRef = useRef(null);

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

  const handleLogin = () => {
    // Add your sign-up logic here
    console.log('Logging in with:', email, password);
    // You can make an API call or perform any other sign-up actions
    // ...

    // Close the modal after sign-up
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div ref={modalRef} className="bg-white p-8 w-[456px]">
        <h1 className='text-center text-060F42 font-bold'>HouseMarket</h1>
        <h2 className="text-2xl font-bold mb-4 text-center mt-[20px]">Login into your account</h2>
        <p className='text-center mt-[-10px]'>Welcome back! Please enter your details.</p>
        <form>
      
          <label className="block mb-2 font-bold mt-[32px] ">Email:</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block mb-2 font-bold">Password:</label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <button
            type="button" // Assuming this is not a form submission
            onClick={handleLogin}
            style={{ backgroundColor: '#060F43' }}
            className=" mt-[30px] text-white p-3 rounded-md cursor-pointer w-full"
          >
            Sign In
          </button>
          <button
            type="button" // Assuming this is not a form submission
            onClick={handleLogin}
            style={{ border: '2px solid black' }}
            className="border border-black p-3 bg-white text-black p-2 rounded-md cursor-pointer w-full mt-[13px]"
          ><FcGoogle role="button" size={25} className="mb-[-23px] ml-[80px]"/>
            Sign in with Google
          </button>
          <button
            type="button" // Assuming this is not a form submission
            onClick={handleLogin}
            className="bg-blue-500 text-white p-3 rounded-md cursor-pointer w-full mt-[13px]"
          ><FaFacebook role="button" size={25} className="mb-[-22px] ml-[80px]" />
            Sign in with Facebook
          </button>
          <button
            type="button" // Assuming this is not a form submission
            onClick={handleLogin}
            className="bg-black text-white p-3 rounded-md cursor-pointer w-full mt-[13px]"
          ><FaApple role="button" size={25} className="mb-[-22px] ml-[80px]"/>
            Sign in with Apple
          </button>

          <p className='text-center  text-gray-400 mt-[30px]'>By creating an account you agree to HouseMarket's <span className='text-blue-800 font-bold'>Terms of Use</span> and <span className='text-blue-800 font-bold'>Privacy Policy</span></p>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
