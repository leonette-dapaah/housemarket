import React from 'react';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { IoBedOutline } from 'react-icons/io5';
import { LiaBathSolid } from 'react-icons/lia';

interface HouseCardProps {
  imageSrc?: string;
  streetName?: string;
  price: string;
  bed?: string;
  baths?: string;
  created_at: string;
  isLiked: boolean;
  onClick: () => void;
}

const HouseCard: React.FC<HouseCardProps> = ({ imageSrc, streetName, price, bed, baths, created_at, isLiked, onClick }) => {
  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent link from triggering
    onClick(); // Toggle the liked state
  };

  return (
    <div className="w-full lg:w-5/5 shadow-md rounded-md mb-[70px] pr-5">
      <div className="relative">
        <img src={imageSrc} alt="House" style={{ borderRadius: '0px' }} />
        <div className="absolute top-2 left-2 bg-[#FFEA58] text-[#070058] p-1 rounded font-normal">
          {created_at}
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <p className="text-s text-gray-400 capitalize">{streetName}</p>
          <button onClick={handleLikeClick}>
            {isLiked ? <HiHeart role="button" size={30} /> : <HiOutlineHeart role="button" size={30} />}
          </button>
        </div>
        <p className="font-bold text-2xl">GHS {price}</p>
        <div className="flex flex col mt-[10px]">
          <IoBedOutline role="button" size={27} />
          <p className="ml-[10px] mr-[10px] ">{bed}</p>
          <LiaBathSolid role="button" size={27} />
          <p className="ml-[10px] mr-[10px] ">{baths}</p>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
