import React, { useState } from 'react';
import houseImg from '@/assets/images/homepage.jpg';
import { CgNotes } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { PiDownloadBold } from "react-icons/pi";


const FAQs: React.FC = () => {
  // FAQDisclosure component
  const FAQDisclosure: React.FC = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    return (
      <div className="mt-8 w-full mb-[50px] sm:w-[calc(100% - 60px)] md:w-full lg:w-[1200px] mx-auto p-12">
        {/* Question 1 */}
        <div className="mb-4 mb-[50px] ">
          <button
            onClick={() => setIsOpen1(!isOpen1)}
            className="flex items-center justify-between w-full p-4 bg-white rounded-3xl focus:outline-none shadow-lg"
          >
            <span className="text-[20px] ml-[35px] font-normal h-[100px] pt-[30px] ">How do I manage and edit my listings?</span>
            <span className={`transform transition-transform ${isOpen1 ? 'rotate-180' : 'rotate-0'}`}>
              &#x2b;
            </span>
          </button>

          {isOpen1 && (
            <div className="mt-[-25px] shadow-lg rounded-xl bg-white   p-4 ">
              <p className=' ml-[35px]'>
                Apartments can be booked directly on our website or with our booking team on 0203 935 5953 as they will be happy to assist you.
              </p>
            </div>
          )}
        </div>

        {/* Question 2 */}
        <div className="mb-4">
          <button
            onClick={() => setIsOpen2(!isOpen2)}
            className="flex items-center justify-between w-full p-4 bg-white rounded-3xl focus:outline-none shadow-lg"
          >
            <span className="text-[20px] ml-[35px] font-normal h-[100px] pt-[30px]">How will potential renters contact me?</span>
            <span className={`transform transition-transform ${isOpen2 ? 'rotate-180' : 'rotate-0'}`}>
              &#x2b;
            </span>
          </button>

          {isOpen2 && (
            <div className="mt-[-25px] shadow-lg rounded-xl p-4 bg-white ">
              <p className='ml-[35px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          )}
        </div>

        {/* Question 3 */}
        <div className="mb-4">
          <button
            onClick={() => setIsOpen3(!isOpen3)}
            className="flex items-center justify-between w-full p-4 bg-white rounded-3xl focus:outline-none shadow-lg"
          >
            <span className="text-[20px] ml-[35px] font-normal h-[100px] pt-[30px]">How will potential renters contact me?</span>
            <span className={`transform transition-transform ${isOpen3 ? 'rotate-180' : 'rotate-0'}`}>
              &#x2b;
            </span>
          </button>

          {isOpen3 && (
            <div className="mt-[-25px] shadow-lg rounded-xl p-4 bg-white">
              <p className='ml-[35px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          )}
        </div>

        {/* Question 4 */}
        <div>
          <button
            onClick={() => setIsOpen4(!isOpen4)}
            className="flex items-center justify-between w-full p-4 bg-white rounded-3xl focus:outline-none shadow-lg"
          >
            <span className="text-[20px] ml-[35px] font-normal h-[100px] pt-[30px]">How will potential renters contact me?</span>
            <span className={`transform transition-transform ${isOpen4 ? 'rotate-180' : 'rotate-0'}`}>
              &#x2b;
            </span>
          </button>

          {isOpen4 && (
            <div className="mt-[-25px] shadow-lg rounded-xl p-4 bg-white">
              <p className='ml-[35px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='w-full'>
      <div style={{backgroundImage: `url(${houseImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}} 
        className="p-5 lg:h-[700px] sm:p-10 md:p-20 h-[42rem] relative flex justify-center items-center"
      >
      <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='flex flex-col text-center relative z-10 gap-10'>
          <p className="font-[500] text-4xl w-full mb-2 text-white font-faustina lg:text-7xl md:text-5xl">Expand Your Renter and Buyers Audience with<br />HouseKee</p>
          <p className="text-xl lg:text-[25px] text-white font-faustina md:text-[20px]">Maximize your rental property's exposure by leveraging Redfin's platform to<br />reach a broader pool of potential renters</p>
        </div>
      </div>
      <div>
        <p className='text-[60px] text-center mt-[60px] font-faustina'>How it Works</p>
        <div className='flex flex-col lg:flex-row md:flex-col justify-center items-center gap-20 mt-[50px] lg:flex-grid gap-20'>
          <div className='h-[180px] w-[440px] p-28 gap-14 rounded-3xl bg-green-100'>
            <div className="h-[60px] w-[60px] rounded-full bg-green-500 mt-[-70px] ml-[-90px] flex items-center justify-center">
              <CgNotes role="button" size={27} className="text-white" />
            </div>
            <div className='mt-[-50px]' >
              <h3 className='w-[500px] font-semibold text-[20px]'>Sign up on Housekee.com</h3>
              <p className='text-center mt-[10px]'>Easily register to start sharing your properties on our network of rental sites.</p>
            </div>
          </div>
          <div className='h-[180px] w-[440px] p-28 gap-14 rounded-3xl bg-purple-100'>
            <div className="h-[60px] w-[60px] rounded-full bg-purple-500 mt-[-70px] ml-[-90px] flex items-center justify-center">
              <FiEdit role="button" size={27} className="text-white" />
            </div>
            <div className='mt-[-50px]' >
              <h3 className='w-[500px] font-semibold text-[20px]'>Tell us about your property</h3>
              <p className='text-center mt-[10px]'>Upload photos and details like the number of beds and bathrooms, amenities, pet policies, and more.</p>
            </div>
          </div>
          <div className='h-[180px] w-[440px] p-28 gap-14 rounded-3xl bg-yellow-100'>
            <div className="h-[60px] w-[60px] rounded-full bg-yellow-400 mt-[-70px] ml-[-90px] flex items-center justify-center">
              <PiDownloadBold role="button" size={27} className="text-white" />
            </div>
            <div className='mt-[-50px]' >
              <h3 className='w-[500px] font-semibold text-[20px] ml-[20px]'>Publish your listing</h3>
              <p className='text-center mt-[10px] w-[250px] ml-[-10px]'>Listings undergo review and reach millions of potential renters through a vast network, maximizing exposure for your property.</p>
            </div>
          </div>
        </div>
        
        <p className='text-[60px] text-center mt-[60px] font-faustina'>FAQs</p>

        {/* Render the FAQDisclosure component */}
        <FAQDisclosure />
      </div>
    </div>
  );
}

export default FAQs;
