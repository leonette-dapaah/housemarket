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
    <div className="lg:ml-[0px] lg:mt-[160px] md:mt-[70px] top-1/2 mb-0 bg-[#070058] rounded-xl shadow-md z-1 absolute px-10 lg:px-6 py-12 w-4/5 lg:w-[1800px] md:mx-auto">
      <div className="flex flex-wrap justify-center gap-x-8 md:pl-[20px] md:gap-x-20 md:gap-y-3 lg:gap-x-8 lg:ml-[6px] ">
        <div className="flex flex-col items-start">
          <div className="text-070058 text-white">Rent/Buy</div>
          <select
            className="dropdown-select border rounded-md p-3 w-60 lg:w-64"
            value={selectedRent}
            onChange={handleRentChange}
          >
            <option value="Select Rent">Rent</option>
            <option value="For Rent">For Rent</option>
            <option value="Not For Rent">Not For Rent</option>
          </select>
        </div>

        <div className="flex flex-col items-start">
          <div className="dropdown-label text-070058 text-white">Property Type</div>
          <select
            className="dropdown-select border rounded-md p-3 w-60 lg:w-60"
            value={selectedApartment}
            onChange={handleApartmentChange}
          >
            <option value="Select Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
          </select>
        </div>

        <div className="flex flex-col items-start">
          <div className="dropdown-label text-070058 text-white">Location</div>
          <select
            className="dropdown-select border rounded-md p-3 w-60 lg:w-60"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="Select Location">Any</option>
            <option value="Downtown">Downtown</option>
            <option value="Suburb">Suburb</option>
          </select>
        </div>

        <div className="flex flex-col items-start">
          <div className="dropdown-label text-070058 text-white">Price Range</div>
          <select
            className="dropdown-select border rounded-md p-3 w-60 lg:w-60"
            value={selectedPrice}
            onChange={handlePriceChange}
          >
            <option value="Select Price">GHS 1,000 - 4,000</option>
            <option value="GHS1000 - GHS2000">GHS1000 - GHS2000</option>
            <option value="GHS2000 - GHS3000">GHS2000 - GHS3000</option>
          </select>
        </div>

        <div className="flex flex-col items-start">
          <div className="dropdown-label text-070058 text-white">Beds</div>
          <select
            className="dropdown-select border rounded-md p-3 w-60 lg:w-60"
            value={selectedBed}
            onChange={handleBedChange}
          >
            <option value="Select Bed">1</option>
            <option value="1 Bed">1 Bed</option>
            <option value="2 Beds">2 Beds</option>
            <option value="3 Beds">3 Beds</option>
          </select>
        </div>
        <div>
          <button
            className="search-button bg-yellow-300 lg:w-60 w-60 py-3 mt-6 rounded-md font-semibold"
            onClick={handleSearch}
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};


export default Dropdown;
