import React, { useState, ChangeEvent } from "react";
import Dropdown2 from '@/components/dropdown2';
import HouseCard from '@/components/housecards';
import MapComponent from "@/components/mapIntegration";
import { houseData } from '@/data/housedata';
import { IoIosList } from "react-icons/io";
import { RiMap2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { usePropertyStore } from "@/store/store";

const MapInt: React.FC = () => {
  const [selectedApartment, setSelectedApartment] = useState<string>('Select Apartment');

  const handleApartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedApartment(event.target.value);
    // These variables need to be defined outside the function to be used in the MapComponent
  };

  const accraCenter: [number, number] = [5.5600, -0.2057]; // Adjust these coordinates
  const zoomLevel = 12; // Adjust the zoom level

  const {properties} = usePropertyStore();

  return (
    <div className="mt-[380px]">
      <Dropdown2 />
      <div className='hidden lg:block md:block lg:flex justify-end items-center mt-[-160px]  lg:mt-[-150px] mb-[20px] lg:mr-[-1345px] gap-4 md:flex flex-center justify-center items-center md:mr-0'>
        <div>
          <h3 style={{ marginTop: -6, marginRight: 20 }} className="font-bold">Sorted By</h3>
        </div>
        <div>
          <select
            className="border rounded-md p-[12px] w-[200px]"
            value={selectedApartment}
            onChange={handleApartmentChange}
          >
            <option value="Select Apartment">Recommended</option>
            <option value="Studio">Studio</option>
            <option value="1 Bedroom">1 Bedroom</option>
            <option value="2 Bedrooms">2 Bedrooms</option>
          </select>
        </div>
        <Link to="/features/buy">
          <div>
            <button className='border rounded-md p-[12px] w-[150px] text-white' style={{ backgroundColor: '#070058' }}><RiMap2Line  className='text-white mb-[-25px]'/> Maps</button>
          </div>
        </Link>
      </div>
      <div className="visible lg:invisible md:invisible">
        <div className="flex justify-end ">
          <select
            className="rounded-md p-[12px] w-[150px] mr-[40px] z-10"
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
      <div className="flex flex-col-reverse md:flex-row">
        <div className='hidden lg:grid md:visible grid lg:grid-cols-2 w-[1200px] md:grid-cols-2 gap-10 px-[100px]'>
          {properties.map((house, index: number) => (
            <HouseCard
              key={index}
              imageSrc={house?.imageSrc}
              streetName={house?.streetName}
              price={house.price}
              bed={house?.bed}
              created_at={house.created_at}
            />
          ))}
        </div>
        <div className="lg:w-[600px] lg:h-[1100px] w-[520px] h-[600px] bg-gray-500 lg:ml-[40px]  mb-[100px] mt-[-200px] lg:mt-0 md:mt-0 ">
          <MapComponent center={accraCenter} zoom={zoomLevel} />
        </div>
      </div>
      <Link to="/features/buy">
        <div className="visible lg:invisible lg:invisible flex justify-center items-center mb-4 mt-[-100px]">
          <button className='border rounded-full p-[12px] w-[150px] text-white' style={{ backgroundColor: '#070058' }}><IoIosList  className='text-white mb-[-25px] ml-[20px]'/>List</button>
        </div>
      </Link>
    </div>
  );
}

export default MapInt;
