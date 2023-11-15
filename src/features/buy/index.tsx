import React from "react";
import Dropdown2 from '@/components/dropdown2';
import HouseCard from '@/components/housecards';
import {  houseData } from '@/data/housedata';
import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';


const Buy: React.FC = () => {

  const [selectedApartment, setSelectedApartment] = useState<string>('Select Apartment');
  const handleApartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedApartment(event.target.value);
  };
    return (
        <div className="mt-[380px]">
            <Dropdown2 />
            <div className='flex justify-end items-center mt-[-160px] mb-[20px] mr-[110px] gap-4'>
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
                  <button className='border rounded-md p-[12px] w-[150px] text-white' style={{ backgroundColor: '#070058' }}>Maps</button>
                </Link>
              </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 px-[100px]'>
            {houseData.map((house, index: number) => (
            <Link to="/features/propertyDetails" >
              <HouseCard
                key={index}
                imageSrc={house.imageSrc}
                streetName={house.streetName}
                price={house.price}
                bed={house.bed}
                postedTime={house.postedTime}
              />
            </Link>
          ))}
        </div>
        </div>
    );
}
 
export default Buy;