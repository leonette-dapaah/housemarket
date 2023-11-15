import React, { useState, ChangeEvent } from 'react';

const Dropdown2: React.FC = () => {
  const [selectedRent, setSelectedRent] = useState<string>('Select Rent');
  const [selectedApartment, setSelectedApartment] = useState<string>('Select Apartment');
  const [selectedLocation, setSelectedLocation] = useState<string>('Select Location');
  const [selectedPrice, setSelectedPrice] = useState<string>('Select Price');
  const [selectedBed, setSelectedBed] = useState<string>('Select Bed');
  const [selectedBathroom, setSelectedBathroom] = useState<string>('Select Bathrooom');

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

  const handleBathroomChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedBathroom(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search button clicked!');
  };

  return (
    <div className="lg:card w-full mt-[-336px] mb-0 px-8 py-4 bg-white z-10 fixed ml-[-50px] border-t-2 md:py-2">
      <div className="dropdown-container flex flex-wrap gap-x-8 mt-[20px] ml-[90px]">
        <div className="dropdown-item">
          <div className="dropdown-label text-070058 font-medium text-black text-[20px]">Rent/Buy</div>
          <select
            className=" dropdown-select border rounded-md p-[12px] w-[200px] "
            value={selectedRent}
            onChange={handleRentChange}
          >
            <option value="Select Rent">Rent</option>
            <option value="For Rent">For Rent</option>
            <option value="Not For Rent">Not For Rent</option>
          </select>
        </div>

        <div className="dropdown-item">
          <div className="dropdown-label text-070058 font-medium text-black text-[20px]">Property Type</div>
          <select
            className="dropdown-select border rounded-md p-[12px] w-[200px]"
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
          <div className="dropdown-label text-070058 font-medium text-black text-[20px]">Location</div>
          <select
            className="dropdown-select border rounded-md p-[12px] w-[200px]"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="Select Location">Any</option>
            <option value="Downtown">Downtown</option>
            <option value="Suburb">Suburb</option>
          </select>
        </div>

        <div className="dropdown-item">
          <div className="dropdown-label text-070058 font-medium text-black text-[20px]">Price Range</div>
          <select
            className="dropdown-select border rounded-md p-[12px] w-[200px]"
            value={selectedPrice}
            onChange={handlePriceChange}
          >
            <option value="Select Price">GHS 1,000 - 4,000</option>
            <option value="GHS1000 - GHS2000">GHS1000 - GHS2000</option>
            <option value="GHS2000 - GHS3000">GHS2000 - GHS3000</option>
          </select>
        </div>

        <div className="dropdown-item">
          <div className="dropdown-label text-070058 font-bold text-black text-[20px]">Beds</div>
          <select
            className="dropdown-select border rounded-md p-[12px] w-[200px]"
            value={selectedBed}
            onChange={handleBedChange}
          >
            <option value="Select Bed">1</option>
            <option value="1 Bed">1 Bed</option>
            <option value="2 Beds">2 Beds</option>
            <option value="3 Beds">3 Beds</option>
          </select>
        </div>

        <div className="dropdown-item">
          <div className="dropdown-label text-070058 font-medium text-black text-[20px]">Bathroom</div>
          <select
            className=" dropdown-select border rounded-md p-[12px] w-[250px] "
            value={selectedBathroom}
            onChange={handleBathroomChange}
          >
            <option value="Select Rent">1 Bathroom</option>
            <option value="For Rent">2 Bathrooms</option>
            <option value="Not For Rent">3 Bathrooms</option>
          </select>
        </div>

        <button
          className="search-button bg-yellow-300 p-2 w-[120px] h-[50px] mt-[25px]  rounded-md font-semibold  "
          onClick={handleSearch}
        >
          SEARCH
        </button>
        <button className='bg-white w-[135px] h-[50px] text-[#060F42] font-normal text-md border-2 border-[#070058] rounded cursor-pointer mt-32px ml-20px  mt-[25px]'>
            MORE FILTERS
        </button>
      </div>
    </div>
  );
};


export default Dropdown2;
