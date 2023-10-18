import React, { useState } from 'react';
// import './dropdown2.css'; // Import the CSS file

const Dropdownn: React.FC = () => {
  const [selectedRent, setSelectedRent] = useState<string>('Select Rent');
  const [selectedApartment, setSelectedApartment] = useState<string>('Select Apartment');
  const [selectedLocation, setSelectedLocation] = useState<string>('Select Location');
  const [selectedPrice, setSelectedPrice] = useState<string>('Select Price');
  const [selectedBed, setSelectedBed] = useState<string>('Select Bed');

  const handleRentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRent(event.target.value);
  };

  const handleApartmentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedApartment(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(event.target.value);
  };

  const handleBedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBed(event.target.value);
  };

  const handleSearch = () => {
    // Add your search functionality here
    console.log('Search button clicked!');
  };

  return (
    <div className="card">
      <div className="dropdown-wrapper">
        <div className="dropdown-container">
          <div className="dropdown-item">
            <div className="dropdown-label">Rent/Buy</div>
            <select value={selectedRent} onChange={handleRentChange}>
              <option value="Select Rent">Rent</option>
              <option value="For Rent">For Rent</option>
              <option value="Not For Rent">Not For Rent</option>
            </select>
          </div>

          <div className="dropdown-item">
            <div className="dropdown-label">Property Type</div>
            <select value={selectedApartment} onChange={handleApartmentChange}>
              <option value="Select Apartment">Apartment</option>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedrooms">2 Bedrooms</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="dropdown-item">
            <div className="dropdown-label">Location</div>
            <select value={selectedLocation} onChange={handleLocationChange}>
              <option value="Select Location">Any</option>
              <option value="Downtown">Downtown</option>
              <option value="Suburb">Suburb</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="dropdown-item">
            <div className="dropdown-label">Price Range</div>
            <select value={selectedPrice} onChange={handlePriceChange}>
              <option value="Select Price">GHS 1,000 - 4,000</option>
              <option value="GHS1000 - GHS2000">GHS1000 - GHS2000</option>
              <option value="GHS2000 - GHS3000">GHS2000 - GHS3000</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="dropdown-item">
            <div className="dropdown-label">Beds</div>
            <select value={selectedBed} onChange={handleBedChange}>
              <option value="Select Bed">1</option>
              <option value="1 Bed">1 Bed</option>
              <option value="2 Beds">2 Beds</option>
              <option value="3 Beds">3 Beds</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Search button */}
          <button className="search-button" onClick={handleSearch}>
            SEARCH
          </button>
          <button className='filter-btn'>
            MORE FILTERS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdownn;
