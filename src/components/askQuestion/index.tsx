import React, { useState, useRef, useEffect } from 'react';

interface AskQuestionProps {
  isOpen: boolean;
  onClose: () => void;
}

const AskQuestion: React.FC<AskQuestionProps> = ({ isOpen, onClose }) => {
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

  const handleQuestion = () => {
    // Add your sign-up logic here
    console.log('Logging in with:', email, password);
    // You can make an API call or perform any other sign-up actions
    // ...

    // Close the modal after sign-up
    onClose();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-end ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div ref={modalRef} className="bg-white p-8 w-[500px] h-full mt-[200px] z-3">
        <h1 className='text-center text-060F42'>Request A Tour</h1>
        <form>
          <label className="block mb-2 font-bold mt-[32px] ">Name:</label>
          <input
            type="name"
            value={email}
            placeholder="Enter your name"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block mb-2 font-bold">Email:</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <label className="block mb-2 font-bold">Phone Number:</label>
          <input
            type="text"
            value={email}
            placeholder="Enter your number"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <p className='font-bold'>Tour Type</p>
          <div className='flex jusify content space between gap-10'>
            <button className="bg-[#060F42] p-2 text-[white] font-bold border-2 border-[#060F42] rounded w-[230px]">In-person</button>
            <button className="bg-white p-2 text-[#060F42] font-bold border-2 border-[#060F42] rounded w-[230px]">Video Chat</button>
          </div>
          <p className='text-gray-400 mt-[30px]'>By pressing Send Request, you agree that HouseMarket’s and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of buying any property, goods or services. Message/data rates may apply.
             You also agree to our Terms of Use. By creating an account you agree to HouseMarket's <span className='text-blue-800 font-bold'>Terms of Use</span> and <span className='text-blue-800 font-bold'>Privacy Policy</span></p>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
