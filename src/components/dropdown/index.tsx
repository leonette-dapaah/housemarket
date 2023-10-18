import React, { useState, ChangeEvent } from 'react';
// import './dropdow.css'; // Import the CSS file

const Dropdown: React.FC = () => {
  const [selectedRent, setSelectedRent] = useState('Select Rent');
  const [selectedApartment, setSelectedApartment] = useState('Select Apartment');
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const [selectedPrice, setSelectedPrice] = useState('Select Price');
  const [selectedBed, setSelectedBed] = useState('Select Bed');

  const handleRentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedRent(event.target.value);
  };

  const handleApartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedApartment(event.target.value);
  };

  const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const handlePriceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(event.target.value);
  };

  const handleBedChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedBed(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search button clicked!');
  };

  return (
    <div className="dropdown2-card">
      <div className="dropdown2-wrapper">
        <div className="dropdown2-container">
          <div className="dropdown2-item">
            <div className="dropdown2-label">Rent/Buy</div>
            <select className="dropdown2-select" value={selectedRent} onChange={handleRentChange}>
              <option value="Select Rent">Rent</option>
              <option value="For Rent">For Rent</option>
              <option value="Not For Rent">Not For Rent</option>
            </select>
          </div>

          <div className="dropdown2-item">
            <div className="dropdown2-label">Property Type</div>
            <select className="dropdown2-select" value={selectedApartment} onChange={handleApartmentChange}>
              <option value="Select Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedrooms">2 Bedrooms</option>
            </select>
          </div>

          <div className="dropdown2-item">
            <div className="dropdown2-label">Location</div>
            <select className="dropdown2-select" value={selectedLocation} onChange={handleLocationChange}>
              <option value="Select Location">Any</option>
              <option value="Downtown">Downtown</option>
              <option value="Suburb">Suburb</option>
            </select>
          </div>

          <div className="dropdown2-item">
            <div className="dropdown2-label">Price Range</div>
            <select className="dropdown2-select" value={selectedPrice} onChange={handlePriceChange}>
              <option value="Select Price">GHS 1,000 - 4,000</option>
              <option value="GHS1000 - GHS2000">GHS1000 - GHS2000</option>
              <option value="GHS2000 - GHS3000">GHS2000 - GHS3000</option>
            </select>
          </div>

          <div className="dropdown2-item">
            <div className="dropdown2-label">Beds</div>
            <select className="dropdown2-select" value={selectedBed} onChange={handleBedChange}>
              <option value="Select Bed">1</option>
              <option value="1 Bed">1 Bed</option>
              <option value="2 Beds">2 Beds</option>
              <option value="3 Beds">3 Beds</option>
            </select>
          </div>

          <button className="dropdown2-search-button" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;