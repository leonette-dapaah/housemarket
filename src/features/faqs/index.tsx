import React, { useState } from 'react';
import houseImg from '@/assets/images/homepage.jpg';


const FAQs: React.FC = () => {
  // FAQDisclosure component
  const FAQDisclosure: React.FC = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    return (
      <div className="mt-8 w-full mb-[400px] sm:w-[calc(100% - 60px)] md:w-full md:mb-[700px] lg:w-[1200px] mx-auto p-12">
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
            className="flex items-center justify-between w-full p-4 bg-white rounded-3xl focus:outline-none shadow-lg mb-[140px]"
          >
            <span className="text-[20px] ml-[35px] font-normal h-[100px] pt-[30px]">How will potential renters contact me?</span>
            <span className={`transform transition-transform ${isOpen4 ? 'rotate-180' : 'rotate-0'}`}>
              &#x2b;
            </span>
          </button>

          {isOpen4 && (
            <div className="mt-[-85px] shadow-lg rounded-xl p-4 bg-white">
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
      {/* <div>
        <div>
          <div className='inset-0 rounded-md bg-gradient-to-b from-transparent to-black mix-blend-multiply'>
            <img src={houseImg} alt="House Market" className="object-cover h-800 w-full brightness-50 p-0 mt-[-350px]" />
          </div>
          <p className="text-[65px] font-[500] w-[1530px] mt-[-100px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-2 font-faustina">Expand Your Renter and Buyers Audience with<br />HouseKee</p>
          <p className="text-[20px] mt-[-350px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-2 " style={{ marginTop: '70px' }}>Maximize your rental property's exposure by leveraging Redfin's platform to<br />reach a broader pool of potential renters</p>
          <button className='p-4 font-bold rounded mt-[200px] bg-[#FFEA58] text-[#007058] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold'>GET STARTED</button>
        </div>
      </div> */}
      <div style={{backgroundImage: `url(${houseImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className='p-0 w-full relative h-1/3 flex justify-center items-center'>
        <div className='absolute inset-0 bg-black opacity-50'></div>

        <div className='flex flex-col text-center relative z-10'>
          <p className="lg:text-[56px] font-[500] mb-2 text-white font-faustina md:text-[45px]">Expand Your Renter and Buyers Audience with<br />HouseKee</p>
          <p className="lg:text-[25px] text-white font-faustina md:text-[25px]">Maximize your rental property's exposure by leveraging Redfin's platform to<br />reach a broader pool of potential renters</p>
        </div>
      </div>
      <div>
        <p className='lg:flex justify-center items-center text-6xl mt-[70px] font-faustina sm:flex justify-center items-center'>How it Works</p>
        <div className='flex flex-col lg:flex-row md:flex-col justify-center items-center gap-20 mt-[50px] lg:flex-grid gap-20'>
          <div className='h-[180px] w-[440px] p-28 flex flex-col items-start gap-14 rounded-2xl bg-green-100'>
            <h3 className='font-bold w-[400px] mt-[-80px] text-[20px] flex justify-between items-center '>Sign up on HouseKee.com</h3>
            <p className='mt-[-50px] w-[300px] font-sans'>Easily register to start sharing your properties on our network of rental sites.</p>
            <div className='w-[100px] h-[100px] bg-red-500 rounded-[10000px]'></div>
          </div>
          <div className='h-[180px] w-[440px] p-28 flex flex-col items-start gap-14 rounded-2xl bg-purple-200'>
            <div className="h-[60px] w-[60px] rounded-full bg-purple-800"></div>
            <h3 className='font-bold w-[400px] mt-[-130px] text-[20px]'>Tell us about your property</h3>
            <p className='mt-[-50px] w-[300px] font-sans'>Upload photos and details like the number of beds and bathrooms, amenities, pet policies, and more.</p>
          </div>
          <div className='h-[180px] w-[440px] p-28 flex flex-col items-start gap-14 rounded-2xl bg-yellow-200'>
            <div className="h-[460px] w-[460px] rounded-full bg-yellow-500"></div>
            <h3 className='font-bold w-[400px] mt-[-130px] text-[20px]'>Publish your listing</h3>
            <p className='mt-[-50px] w-[300px] font-sans '>Listings undergo review and reach millions of potential renters through a vast network, maximizing exposure for your property.</p>
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
