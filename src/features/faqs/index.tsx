import React, { useState } from 'react';
import './App.css';
import houseImg1 from './Rectangle 3 (2).jpg';
import './FAQs.css';

const FAQs: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="centered-section">
      <div>
        <div className='header-image1'>
          <img src={houseImg1} alt="House Market" style={{ marginTop: -10 }} className='header-image' />
          <p style={{ width: 1320 }}>Expand Your Renter and Buyers Audience with<br />HouseKee</p>
          <p>Maximize your rental property's exposure by leveraging Redfin's platform to<br />reach a broader pool of potential renters</p>
          <button className='getstart-btn'>GET STARTED</button>
        </div>
      </div>
      <div className="centered-section">
        <p className='faq-headtext'>How it Works</p>
        <div className='faq-cards'>
          <div className='faq-card1'>
            <div className="faq-icon1"></div>
            <h3>Sign up on HouseKee.com</h3>
            <p>Easily register to start sharing your properties on our network of rental sites.</p>
          </div>
          <div className='faq-card2'>
            <div className="faq-icon2"></div>
            <h3>Tell us about your property</h3>
            <p>Upload photos and details like the number of beds and bathrooms, amenities, pet policies, and more.</p>
          </div>
          <div className='faq-card3'>
            <div className="faq-icon3"></div>
            <h3>Publish your listing</h3>
            <p>Listings undergo review and reach millions of potential renters through a vast network, maximizing exposure for your property.</p>
          </div>
        </div>
        <p className='faq-text'>FAQs</p>
        <div className='faq-section'>
          <div className='faq-question' onClick={() => toggleQuestion(0)}>
            <p>How do I manage and edit my listings?</p>
            <div className={`arrow-icon ${expandedIndex === 0 ? 'expanded' : ''}`}>&#9660;</div>
          </div>
          <div className={`collapsed-content ${expandedIndex === 0 ? 'expanded' : ''}`}>
            <p>Apartments can be booked directly on our website or with our booking team on 0203 935 5953 as they will be happy to assist you.</p>
          </div>

          <div className='faq-question' onClick={() => toggleQuestion(1)}>
            <p>How will potential renters contact me?</p>
            <div className={`arrow-icon ${expandedIndex === 1 ? 'expanded' : ''}`}>&#9660;</div>
          </div>
          <div className={`collapsed-content ${expandedIndex === 1 ? 'expanded' : ''}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className='faq-question' onClick={() => toggleQuestion(2)}>
            <p>How will potential renters contact me?</p>
            <div className={`arrow-icon ${expandedIndex === 2 ? 'expanded' : ''}`}>&#9660;</div>
          </div>
          <div className={`collapsed-content ${expandedIndex === 2 ? 'expanded' : ''}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className='faq-question' onClick={() => toggleQuestion(3)}>
            <p>How will potential renters contact me?</p>
            <div className={`arrow-icon ${expandedIndex === 3 ? 'expanded' : ''}`}>&#9660;</div>
          </div>
          <div className={`collapsed-content ${expandedIndex === 3 ? 'expanded' : ''}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
    </div>
  );
}

export default FAQs;
