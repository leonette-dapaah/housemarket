import React, { useState, ChangeEvent } from "react";
import Dropdown2 from '@/components/dropdown2';
import HouseCard from '@/components/housecards';
import MapComponent from "@/components/mapIntegration";
import { houseData } from '@/data/housedata';

const MapInt: React.FC = () => {
  const [selectedApartment, setSelectedApartment] = useState<string>('Select Apartment');

  const handleApartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedApartment(event.target.value);
    // These variables need to be defined outside the function to be used in the MapComponent
  };

  const accraCenter: [number, number] = [5.5600, -0.2057]; // Adjust these coordinates
  const zoomLevel = 12; // Adjust the zoom level

  return (
    <div className="mt-[380px]">
      <Dropdown2 />
      <div className='flex items-center ml-[1325px] mt-[-160px] mb-[20px] mr-[40px] gap-4'>
        <div>
          <h3 style={{ marginTop: -6, marginRight: 20 }} className="font-bold">Sorted By</h3>
        </div>
        <div>
          <select
            className="dropdown-select border rounded-md p-[12px] w-[250px]"
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
          <button className='border rounded-md p-[12px] w-[150px] text-white' style={{ backgroundColor: '#070058' }}>Maps</button>
        </div>
      </div>
      <div className="flex">
        <div className='grid lg:grid-cols-2 w-[1200px] md:grid-cols-2 gap-10 px-[100px]'>
          {houseData.map((house, index: number) => (
            <HouseCard
              key={index}
              imageSrc={house.imageSrc}
              streetName={house.streetName}
              price={house.price}
              bed={house.bed}
              postedTime={house.postedTime}
            />
          ))}
        </div>
        <div className="w-[600px] h-[1100px] bg-gray-500 ml-[40px]">
          <MapComponent center={accraCenter} zoom={zoomLevel} />
        </div>
      </div>
    </div>
  );
}

export default MapInt;
