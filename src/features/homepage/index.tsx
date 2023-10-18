import React from 'react';
// import './App.css';
// import houseImg from './assets/images/Rectangle 3 (2).jpg';
import houseImg from '@/assets/images/Rectangle 3 (2).jpg';
// import Dropdown from './components/dropdown/index';
import Dropdown from '@/components/dropdown';
// import HouseCard from './components/housecards';
import HouseCard from '@/components/housecards';
// import houseImage from './assets/images/section1.jpg';
import houseImage from '@/assets/images/section1.jpg';
// import houseImgg from './assets/images/section2.jpg';
import houseImgg from '@/assets/images/section2.jpg';
import { useNavigate } from 'react-router-dom';
// import { houseData, House } from './data' // you do not have houseData or House within the data folder

const Home: React.FC = () => {
    const navigate = useNavigate();
  
    return (
      <div>
        <div className='header-image'>
          <img src={houseImg} alt="House Market" style={{ marginTop: -10 }} className='header-image' />
          <p className='hea'>Your Property Marketplace</p>
          <p className='headtext'>Simplifying the Process of Renting, Buying and Selling Properties</p>
        </div>
        <Dropdown />
        <div>
          <div>
            <p style={{ fontSize: 50, textAlign: 'center', color: "#070058", marginBottom: 0 }}>Latest Listing</p>
            <p style={{ fontSize: 20, textAlign: 'center', color: "#070058", paddingBottom: 100 }}>Checkout our latest property listing</p>
          </div>
        </div>
        <div className="house-grid">
          {/* {houseData.map((house: House, index: number) => (
            <HouseCard
              key={index}
              imageSrc={house.imageSrc}
              streetName={house.streetName}
              price={house.price}
              bed={house.bed}
            />
          ))} */}
        </div>
        <button className='viewmore-btn'>VIEW MORE</button>
        <div className='section'>
          <div>
            <img src={houseImage} alt="house" className='section-image' />
          </div>
          <div className='section-card'>
            <p className='sectioncard-text'>Rent or buy a<br />Property</p>
            <p>Discover your perfect property solution, where you can effortlessly rent or buy properties that suit your needs. Simplifying the process, we provide a seamless platform to find your dream home or lucrative investment opportunity.</p>
            <button className='viewmore-btn'>RENT/BUY</button>
          </div>
        </div>
        <div className='section1'>
          <div className='section-card1'>
            <p className='sectioncard-text'>Rent Or Sell your <br />Property</p>
            <p>Maximize your property's potential on our platform, where you can effortlessly list and rent or sell your property. With user-friendly tools and a wide-reaching audience, we make it easy for you to showcase and monetize your real estate investment.</p>
            <button className='viewmore-btn' onClick={() => navigate('/faqs')}>Get Started
            </button>
          </div>
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
        </section>
        <footer>
          <div>
            <p>© 2023 HouseMarket. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Home;