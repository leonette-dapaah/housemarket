import React, { useState, useRef, useEffect } from 'react';
import { useCreateTour } from '@/store/createTour';
import { toast } from 'react-toastify';


interface TourProps {
  isOpen: boolean;
  onClose: () => void;
}

const  RequestTour: React.FC<TourProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const modalRef = useRef(null);
  const { createTour } = useCreateTour();

  const handleTourClick = async () => {
    console.log("Clicked!")
    const payload = {
      email: email,
      name: username,
      phone_number: number, 
      tour_date_time: new Date()
    }
    console.log(payload);
    const {success, errorMessage, response} = await createTour(payload)
    if (success) {
      toast.success('successful!')
    } else {
      toast.error(`try again later, ${errorMessage}`)
    }
  }

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

  // const handleTour = () => {
  //   // Add your sign-up logic here
  //   console.log('Logging in with:', email, password);
  //   // You can make an API call or perform any other sign-up actions
  //   // ...

  //   // Close the modal after sign-up
  //   onClose();
  // };

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
            type="text"
            value={username}
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
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
            value={number}
            placeholder="Enter your number"
            onChange={(e) => setNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          <p className='font-bold'>Tour Type</p>
          <div className='flex jusify content space between gap-10'>
            <button className="bg-[#060F42] p-2 text-[white] font-bold border-2 border-[#060F42] rounded w-[230px]">In-person</button>
            <button className="bg-white p-2 text-[#060F42] font-bold border border-[#060F42] rounded w-[230px]">Video Chat</button>
          </div>
          <p className='text-gray-400 mt-[30px]'>By pressing Send Request, you agree that HouseMarket’s and real estate professionals may call/text you about your inquiry, which may involve use of automated means and prerecorded/artificial voices. You don't need to consent as a condition of buying any property, goods or services. Message/data rates may apply.
             You also agree to our Terms of Use. By creating an account you agree to HouseMarket's <span className='text-blue-800 font-bold'>Terms of Use</span> and <span className='text-blue-800 font-bold'>Privacy Policy</span></p>
        </form>
        <div className='mt-[160px] flex gap-3'>
          <button className='bg-white p-3 w-[170px] rounded-md text-[#060F42] font-semibold border border-[#060F42]'>CANCEL</button>
          <button onClick={handleTourClick}  className='bg-[#060F42]  p-3 w-[370px] rounded-md text-white font-semibold'>SEND REQUEST</button>
        </div>
      </div>
    </div>
  );
};

export default RequestTour;
