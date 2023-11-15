import React from 'react';
// import './App.css';
// import houseImg from './assets/images/Rectangle 3 (2).jpg';
import houseImg from '@/assets/images/homepage.jpg';
// import Dropdown from './components/dropdown/index';
import Dropdown from '@/components/dropdown';
// import HouseCard from './components/housecards';
import HouseCard from '@/components/housecards';
// import houseImage from './assets/images/section1.jpg';
import houseImage from '@/assets/images/section1.jpg';
// import houseImgg from './assets/images/section2.jpg';
import houseImgg from '@/assets/images/section2.jpg';
import { useNavigate } from 'react-router-dom';
import {  houseData } from '@/data/housedata';
import { Link } from 'react-router-dom';
import { PropertyDetails } from '@/features/propertyDetails';


const Home: React.FC = () => {
    const navigate = useNavigate();
    
  
    return (
      <div>
        {/* <div className="relative min-h-screen min-w-screen overflow-hidden">
          <div className='inset-0 rounded-md bg-gradient-to-b from-transparent to-black mix-blend-multiply"'>
            <img src={houseImg} alt="House Market" className="object-cover w-full brightness-50 p-0 mt-[-350px]"/>
          </div>
          <div className=''>
            <p className=" mt-[-200px] text-[80px] font-[500] w-full mb-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-2 font-faustina md:text-[45px]">Your Property Marketplace</p>
            <p className="mt-[-120px] text-[25px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-2 font-faustina">Simplifying the Process of Renting, Buying, and Selling Properties</p>
          </div>
        </div> */}
        {/* <div style={{backgroundImage: `url(${houseImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", }} className='p-20 relative h-1/5 min-w-screen brightness-50 flex justify-center items-center'>
          <div className='flex flex-col text-center'>
            <p className=" text-[80px] font-[500] w-full mb-2 text-white text-center z-10 font-faustina md:text-[45px]">Your Property Marketplace</p>
            <p className="text-[25px] text-white text-center z-2 font-faustina">Simplifying the Process of Renting, Buying, and Selling Properties</p>
          </div>
        </div> */}
        <div style={{backgroundImage: `url(${houseImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className='p-20 relative h-1/5 min-w-screen flex justify-center items-center'>
          <div className='absolute inset-0 bg-black opacity-50'></div>

          <div className='flex flex-col text-center relative'>
            <p className="lg:text-[80px] font-[500] w-full mb-2 text-white font-faustina md:text-[45px]">Your Property Marketplace</p>
            <p className="lg:text-[25px] text-white font-faustina md:text-[20px]">Simplifying the Process of Renting, Buying, and Selling Properties</p>
          </div>
        </div>
        <Dropdown />
        <div>
          <div>
            <p style={{ fontSize: 50, textAlign: 'center', color: "#070058", marginBottom: 0 }} className='lg:mt-[120px] font-faustina md:mt-[160px]'>Latest Listing</p>
            <p style={{ fontSize: 20, textAlign: 'center', color: "#070058", paddingBottom: 100 }} className='font-faustina'>Checkout our latest property listing</p>
          </div>
        </div>
        
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-[100px]' onClick={PropertyDetails}>
          {houseData.map((house, index: number) => (
            <Link to="/features/propertyDetails" >
              <HouseCard
                key={index}
                imageSrc={house.imageSrc}
                streetName={house.streetName}
                price={house.price}
                bed={house.bed}
                postedTime={house.postedTime}
              />
            </Link>
          ))}
        </div>
        <Link to="/features/buy">
          <button className='mx-auto flex items-center justify-center mt-[-40px] bg-[#060F42] text-white text-[16px] p-5 rounded-lg'>VIEW MORE</button>
        </Link>
        <div className="relative flex mt-[200px]">
          <div className='invisible lg:visible'>
            <img src={houseImage} alt="house" className='w-[750px] h-[500px] ml-96' />
          </div>
          <div className='md:mr-[260px] w-[750px] h-[500px]  bg-white text-[#060F42] p-16 mt-[-170px] ml-[-400px]'>
            <p className='pt-20 text-5xl text-center  mb-10 font-faustina'>Rent or buy a<br />Property</p>
            <p className='text-center'>Discover your perfect property solution, where you can effortlessly rent or buy properties that suit your needs. Simplifying the process, we provide a seamless platform to find your dream home or lucrative investment opportunity.</p>
            <Link to="/features/buy">
              <button className='mx-auto flex items-center justify-center mt-10 bg-[#060F42] text-white text-[16px] p-3 rounded-lg'>RENT/BUY</button>
            </Link>
          </div>
        </div>
        <div className="relative flex mt-[200px] mb-[600px]">
          <div className='invisible lg:visible'>
            <img src={houseImgg} alt="house" className='w-[750px] h-[500px] ml-[700px]' />
          </div>
          <div className='md:mr-[170px]  w-[750px] h-[500px]  bg-white text-[#060F42] p-16 mt-[-170px] ml-[-1100px] '>
            <p className='pt-20 text-5xl text-center mb-10 font-faustina'>Rent or buy a<br />Property</p>
            <p className='text-center'>Maximize your property's potential on our platform, where you can effortlessly list and rent or sell your property. With user-friendly tools and a wide-reaching audience, we make it easy for you to showcase and monetize your real estate investment.</p>
            <Link to="/features/faqs"> 
              <button className='mx-auto flex items-center justify-center mt-10 bg-[#060F42] text-white text-[16px] p-3 rounded-lg'>Get Started</button>
            </Link>
          </div>
        </div> 
        {/* <div className='relative flex mt-[400px] mb-[100px] '>
          <div className='w-[750px] h-[500px]  ml-56 bg-white text-[#060F42] p-16 mt-[-170px] mr-[-200px] '>
            <p className='pt-20 text-4xl text-center font-extrabold mb-10'>Rent Or Sell your <br />Property</p>
            <p className='text-center'>Maximize your property's potential on our platform, where you can effortlessly list and rent or sell your property. With user-friendly tools and a wide-reaching audience, we make it easy for you to showcase and monetize your real estate investment.</p>
            <Link to="/features/favourites/index.tsx"> 
              <button className='mx-auto flex items-center justify-center mt-10 bg-[#060F42] text-white p-5'>Get Started</button>
            </Link>
          </div>
          <div>
            <img src={houseImgg} alt="house" className='w-[750px] h-[500px] mr-[500px] z-[negative-5]' />
          </div>
        </div> */}
        {/* <div className='section1'>
          <div className='section-card1'>
            <p className='sectioncard-text'>Rent Or Sell your <br />Property</p>
            <p>Maximize your property's potential on our platform, where you can effortlessly list and rent or sell your property. With user-friendly tools and a wide-reaching audience, we make it easy for you to showcase and monetize your real estate investment.</p>
            <button className='viewmore-btn' onClick={() => navigate('/faqs')}>Get Started
            </button>
          </div>n
          <div>
            <img src={houseImgg} alt="house" className='section-image1' />
          </div>
        </div>
        <section className='footer-section'>
          <div className='footer-column'>
            <h1 style={{ fontSize: 39, marginLeft: 40, marginTop: 0 }}>HouseMarket</h1>
            <ul>
              <li>GET IN TOUCH</li>
              <li>Accra.</li>
              <li>Opening Hours</li>
              <li>Mon - Fri 9.00am to 6.30pm</li>
              <li>Saturday: 10.00am to 3.00pm</li>
            </ul>
          </div>
          <div className='footer-column' style={{ marginLeft: 90 }}>
            <h1 style={{ fontSize: 16 }}>ABOUT</h1>
            <li>About Us</li>
            <li>Seller Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQS</li>
            <li>Contact Us</li>
          </div>
          <div className='footer-column'>
            <h3>Join our newsletter</h3>
            <p>We'll send you a nice letter once per week.</p>
            <input type="text" placeholder='Enter your email' className='input-btn' />
            <button className='viewmore-btn' style={{ marginLeft: -3 }}>Subscribe</button>
          </div>
        </section> */}
        <footer>
          <div>
            {/* <p>© 2023 HouseMarket. All rights reserved.</p> */}
          </div>
        </footer>
      </div>
    );
  }
  
  export default Home;