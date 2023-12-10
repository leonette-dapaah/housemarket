import React from "react";
import Dropdown2 from '@/components/dropdown2';
import HouseCard from '@/components/housecards';
import {  houseData } from '@/data/housedata';
import { useState, ChangeEvent } from 'react';
import { RiMap2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Buy: React.FC = () => {

  const [selectedApartment, setSelectedApartment] = useState<string>('Select Apartment');
  const handleApartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedApartment(event.target.value);
  };
    return (
        <div className="mt-[380px] md:mt-[560px]">
            <Dropdown2 />
            <div className='invisible lg:visible md:visible lg:flex justify-end items-center mt-[-160px]  lg:mt-[-330px] mb-[20px] lg:mr-[-1275px] gap-4 md:flex flex-center justify-center items-center md:mr-0'>
              <div>
                <h3 style={{marginTop:-6, marginRight:20}} className="font-bold">Sorted By</h3>
              </div>
              <div>
                <select
                  className="dropdown-select border rounded-md p-[12px] w-[200px]"
                  value={selectedApartment}
                  onChange={handleApartmentChange}
                >
                  <option value="Select Apartment">Recommended</option>
                  <option value="Studio">Studio</option>
                  <option value="1 Bedroom">1 Bedroom</option>
                  <option value="2 Bedrooms">2 Bedrooms</option>
                </select>
              </div>
              <div>
                <Link to="/features/map">
                  <button className='border rounded-md p-[12px] w-[150px] text-white' style={{ backgroundColor: '#070058' }}><RiMap2Line  className='text-white mb-[-25px]'/>Maps</button>
                </Link>
              </div>
            </div>
            <div className="visible lg:invisible md:invisible">
              <div className="mt-[-225px] flex justify-end">
                <select
                  className="dropdown-select rounded-md p-[12px] w-[150px] mr-[40px] z-10"
                  value={selectedApartment}
                  onChange={handleApartmentChange}
                >
                  <option value="Select Apartment">Recommended</option>
                  <option value="Studio">Studio</option>
                  <option value="1 Bedroom">1 Bedroom</option>
                  <option value="2 Bedrooms">2 Bedrooms</option>
                </select>
              </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 lg:mt-[170px] md:mt-[170px] mt-[-40px]" onClick={PropertyDetails}'>
            {houseData.map((house, index: number) => (
            <Link to="/features/propertyDetails" >
              <HouseCard
                key={index}
                imageSrc={house.imageSrc}
                streetName={house.streetName}
                price={house.price}
                bed={house.bed}
                created_at={house.postedTime}
              />
            </Link>
          ))}
        </div>
        <div className="visible lg:invisible lg:invisible flex justify-center items-center mb-24">
            <Link to="/features/map">
              <button className='border rounded-full py-[12px] w-[150px] text-white ' style={{ backgroundColor: '#070058' }}><RiMap2Line  className='text-white mb-[-25px] ml-[25px]'/>Maps</button>
            </Link>
        </div>
      </div>
    );
}
 
export default Buy;