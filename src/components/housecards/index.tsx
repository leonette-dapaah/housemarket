import { PropertyDetails } from '@/features';
import React from 'react';
import { HiOutlineHeart } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia"

interface HouseCardProps {
  imageSrc: string;
  streetName: string;
  price: string;
  bed: string;
  postedTime: string;
}

const HouseCard: React.FC<HouseCardProps> = ({ imageSrc, streetName, price, bed, postedTime}) => (
  <div className='w-full  shadow-md rounded-md mb-[70px] mr-0' onClick={PropertyDetails}>
    <div className="relative ">
      <img src={imageSrc} alt="House" style={{ borderRadius: '0px' }} />
        
      <div className="absolute top-2 left-2 bg-[#FFEA58] text-[#070058] p-1 rounded font-normal">
        {postedTime}
      </div>
    </div>
    <div className='p-3'>
      <div className='flex justify-between items-center'>
        <p className="text-s text-gray-400">{streetName}</p>
        <HiOutlineHeart role="button" size={30} />
      </div>
      <p className="font-bold text-2xl">{price}</p>
      <div className='flex flex col mt-[10px]'>
        <IoBedOutline role="button" size={27}  />
        <p className="ml-[10px] mr-[10px] ">{bed}</p>
        <LiaBathSolid role="button" size={27}/>
      </div>
    </div>
  </div>
);

export default HouseCard;
