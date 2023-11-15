import React, { useState, ChangeEvent } from 'react';

const Dropdown: React.FC = () => {
  const [selectedRent, setSelectedRent] = useState<string>('Select Rent');
  const [selectedApartment, setSelectedApartment] = useState<string>('Select Apartment');
  const [selectedLocation, setSelectedLocation] = useState<string>('Select Location');
  const [selectedPrice, setSelectedPrice] = useState<string>('Select Price');
  const [selectedBed, setSelectedBed] = useState<string>('Select Bed');

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
    <div className="lg:ml-[150px] mt-[-100px] mb-0 bg-[#070058] rounded-xl shadow-md z-1 absolute px-10 py-12 md:mx-auto:">
      <div className="dropdown-container flex flex-wrap gap-x-8 md:pl-[50px]">
        <div className="dropdown-item">
          <div className="dropdown-label text-070058 text-white">Rent/Buy</div>
          <select
            className=" dropdown-select border rounded-md p-[12px] w-[230px] "
            value={selectedRent}
            onChange={handleRentChange}
          >
            <option value="Select Rent">Rent</option>
            <option value="For Rent">For Rent</option>
            <option value="Not For Rent">Not For Rent</option>
          </select>
        </div>

        <div className="dropdown-item">
          <div className="dropdown-label text-070058 text-white">Property Type</div>
          <select
            className="dropdown-select border rounded-md p-[12px] w-[230px]"
            value={selectedApartment}
            onChange={handleApartmentChange}
          >
            <option value="Select Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
          </select>
        </div>

        <div className="dropdown-item">
          <div className="dropdown-label text-070058 text-white">Location</div>
          <select
            className="dropdown-select border rounded-md p-[12px] w-[230px]"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="Select Location">Any</option>
            <option value="Downtown">Downtown</option>
            <option value="Suburb">Suburb</option>
          </select>
        </div>

        <div className="dropdown-item">
          <div className="dropdown-label text-070058 text-white">Price Range</div>
          <select
            className="dropdown-select border rounded-md p-[12px] w-[230px]"
            value={selectedPrice}
            onChange={handlePriceChange}
          >
            <option value="Select Price">GHS 1,000 - 4,000</option>
            <option value="GHS1000 - GHS2000">GHS1000 - GHS2000</option>
            <option value="GHS2000 - GHS3000">GHS2000 - GHS3000</option>
          </select>
        </div>

        <div className="dropdown-item">
          <div className="dropdown-label text-070058 text-white">Beds</div>
          <select
            className="dropdown-select border rounded-md p-[12px] w-[230px]"
            value={selectedBed}
            onChange={handleBedChange}
          >
            <option value="Select Bed">1</option>
            <option value="1 Bed">1 Bed</option>
            <option value="2 Beds">2 Beds</option>
            <option value="3 Beds">3 Beds</option>
          </select>
        </div>

        <button
          className="search-button bg-yellow-300 p-2 w-[230px] h-[50px] mt-[24px]  rounded-md font-semibold  "
          onClick={handleSearch}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};


export default Dropdown;
