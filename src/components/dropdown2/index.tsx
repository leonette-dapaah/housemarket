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
    <div className=" lg:ml-[0px] lg:mt-[101px] mt-20 md:mt-[-70px] top-0 mb-0 bg-white absolute px-10 lg:px-6 py-12 w-full lg:w-full md:mt-[101px] md:mx-auto md:w-4/4 md:shadow-none">
      <div className="invisible lg:visible md:visible flex flex-wrap justify-center lg:gap-x-8  lg:pl-0 md:pl-[20px] md:gap-x-20 md:gap-y-3 lg:gap-x-8 ">
        <div>
          <div className="text-070058 font-semibold">Rent/Buy</div>
          <select
            className="border rounded-md p-[12px] w-[200px] "
            value={selectedRent}
            onChange={handleRentChange}
          >
            <option value="Select Rent">Rent</option>
            <option value="For Rent">For Rent</option>
            <option value="Not For Rent">Not For Rent</option>
          </select>
        </div>

        <div className=''>
          <div className="text-070058 font-semibold">Property Type</div>
          <select
            className=" border rounded-md p-[12px] w-[200px]"
            value={selectedApartment}
            onChange={handleApartmentChange}
          >
            <option value="Select Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
          </select>
        </div>

        <div>
          <div className="text-070058 font-semibold">Location</div>
          <select
            className="border rounded-md p-[12px] w-[200px]"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="Select Location">Any</option>
            <option value="Downtown">Downtown</option>
            <option value="Suburb">Suburb</option>
          </select>
        </div>

        <div>
          <div className="text-070058 font-semibold ">Price Range</div>
          <select
            className="border rounded-md p-[12px] w-[200px]"
            value={selectedPrice}
            onChange={handlePriceChange}
          >
            <option value="Select Price">GHS 1,000 - 4,000</option>
            <option value="GHS1000 - GHS2000">GHS1000 - GHS2000</option>
            <option value="GHS2000 - GHS3000">GHS2000 - GHS3000</option>
          </select>
        </div>

        <div>
          <div className="text-070058 font-semibold ">Beds</div>
          <select
            className="border rounded-md p-[12px] w-[200px]"
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
          <div className="text-070058 font-semibold">Bathroom</div>
          <select
            className="border rounded-md p-[12px] w-[200px] "
            value={selectedBathroom}
            onChange={handleBathroomChange}
          >
            <option value="Select Rent">1 Bathroom</option>
            <option value="For Rent">2 Bathrooms</option>
            <option value="Not For Rent">3 Bathrooms</option>
          </select>
        </div>

        <button
          className="bg-yellow-300 p-2 lg:w-[175px] md:w-[200px] h-[50px] mt-[20px]  rounded-md font-semibold  "
          onClick={handleSearch}
        >
          SEARCH
        </button>
        <button className='md:mr-[-280px] lg:mr-0 bg-white lg:w-[175px] md:w-[200px] h-[50px] text-[#060F42] font-semibold text-md border-2 border-[#070058] rounded cursor-pointer mt-32px lg:ml-20px mt-[20px]'>
            MORE FILTERS
        </button>
      </div>
      <div className='visible lg:invisible md:invisible mt-[-300px]'>
        <div className=' flex justify-between gap-x-3'>
          <div>
            <select
              className="border rounded-md p-[12px] w-[125px] "
              value={selectedRent}
              onChange={handleRentChange}
            >
              <option value="Select Rent">Rent</option>
              <option value="For Rent">For Rent</option>
              <option value="Not For Rent">Not For Rent</option>
            </select>
          </div>
          <div>
            <select
              className="border rounded-md p-[12px] w-[125px]"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="Select Location">Location</option>
              <option value="Downtown">Downtown</option>
              <option value="Suburb">Suburb</option>
            </select>
          </div>
          <div>
            <button className='py-3.5 bg-[#060F42] w-[125px] rounded text-white'>FILTERS</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dropdown2;
