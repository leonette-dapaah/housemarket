import React from "react";
import "./favorites.css";
import "./App.css";
import HouseCard from "./HouseCard";

interface House {
  imageSrc: string;
  streetName: string;
  price: string;
  bed: string;
}

const Fav: React.FC = () => {
  const houseData: House[] = [
    {
      imageSrc: "/one1.jpg",
      streetName: "123 Main St",
      price: "GHS 1,000 / Month",
      bed: "2 beds 2 baths",
    },
    {
      imageSrc: "two2 (1).jpg",
      streetName: "456 Oak Ave",
      price: "GHS 1,000 / Month",
      bed: "2 beds 2 baths",
    },
    {
      imageSrc: "three3.jpg",
      streetName: "456 Oak Ave",
      price: "GHS 1,000 / Month",
      bed: "2 beds 2 baths",
    },
    {
      imageSrc: "four4 (1).jpg",
      streetName: "456 Oak Ave",
      price: "GHS 1,000 / Month",
      bed: "2 beds 2 baths",
    },
    {
      imageSrc: "/one1.jpg",
      streetName: "123 Main St",
      price: "GHS 1,000 / Month",
      bed: "2 beds 2 baths",
    },
    {
      imageSrc: "two2 (1).jpg",
      streetName: "456 Oak Ave",
      price: "GHS 1,000 / Month",
      bed: "2 beds 2 baths",
    },
    {
      imageSrc: "three3.jpg",
      streetName: "456 Oak Ave",
      price: "GHS 1,000 / Month",
      bed: "2 beds 2 baths",
    },
    {
      imageSrc: "four4 (1).jpg",
      streetName: "456 Oak Ave",
      price: "GHS 1,000 / Month",
      bed: "2 beds 2 baths",
    },
  ];

  return (
    <div>
      <div style={{ position: "fixed", width: 1900 }}>
        <div className="fav-text">
          <p>Favourites</p>
        </div>
        <div style={{ marginTop: -55 }} className="underline">
          <button className="fav-btn">Favourites</button>
          <button className="acc-btn">Account Settings</button>
          <button className="notif-btn">Notifications</button>
        </div>
      </div>
      <div className="options2">
        <div>
          <h3 style={{ marginTop: 45, marginRight: 20 }}>Sorted By</h3>
        </div>
        <div className="dropdown2-item">
          <div className="dropdown2-label">Recommended</div>
          <select className="dropdown2-select">
            <option value="Select Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
          </select>
        </div>
        <div>
          <button className="map-btn">Maps</button>
        </div>
      </div>
      <div className="house-grid">
        {houseData.map((house, index) => (
          <HouseCard
            key={index}
            imageSrc={house.imageSrc}
            streetName={house.streetName}
            price={house.price}
            bed={house.bed}
          />
        ))}
      </div>
      <section className="footer-section">
        <div className="footer-column">
          <h1 style={{ fontSize: 39, marginLeft: 40, marginTop: 0 }}>
            HouseMarket
          </h1>
          <ul>
            <li>GET IN TOUCH</li>
            <li>Accra.</li>
            <li>Opening Hours</li>
            <li>Mon - Fri 9.00am to 6.30pm</li>
            <li>Saturday: 10.00am to 3.00pm</li>
          </ul>
        </div>
        <div className="footer-column" style={{ marginLeft: 90 }}>
          <h1 style={{ fontSize: 16 }}>ABOUT</h1>
          <li>About Us</li>
          <li>Seller Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>FAQS</li>
          <li>Contact Us</li>
        </div>
        <div className="footer-column">
          <h3>Join our newsletter</h3>
          <p>We'll send you a nice letter once per week.</p>
          <input
            type="text"
            placeholder="Enter your email"
            className="input-btn"
          />
          <button className="viewmore-btn" style={{ marginLeft: -3 }}>
            Subscribe
          </button>
        </div>
      </section>
      <footer>
        <div>
          <p>© 2023 HouseMarket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Fav;
