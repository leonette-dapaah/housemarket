import { PropertyDetails } from "@/features";
import React from "react";
import { useState } from "react";
import houseImg from "@/assets/images/homepage.jpg";
import { BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { PiPencilLineBold } from "react-icons/pi";
import CancelTour from "@/components/modals/cancelTour";


interface BookingCardProps {
  imageSrc?: string;
  streetName?: string;
  price: string;
  date: string;
  status: string;
}


// const [isCancelTourOpen, setCancelTourOpen] = useState(false);

//   const handleOpenCancelTour = () => {
//     setCancelTourOpen(true);
//   };

//   const handleCloseCancelTour = () => {
//     setCancelTourOpen(false);
//   };


export const BookingCard: React.FC<BookingCardProps> = ({ imageSrc, streetName, price, date, status}) => (
  <div className="w-[1400px] h-[130px] lg:w-5/5 shadow rounded-md mb-[70px] p-2 border border-1-grey mb-[250px] mt-[50px]">
    <div className="flex justify-space-between">  
      <div className="flex justiify-space-between">
        <div className="w-[190px] h-[120px]">
          <img src={houseImg} alt="House" style={{ borderRadius: "8px" }} className="rounded-md" />
        </div>
        <div className="">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">{streetName}</p>
            <p className="font-bold text-2xl">{price}</p>
            <p>{status}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-spce-between ml-[860px] mt-[60px]">
        <div className="flex justify-space-between items-center">
          <div className="font-bold mr-[7px]">
            <PiPencilLineBold size={18}/>
          </div> 
          <button className="font-semibold mr-[25px]">Reschedule</button>
          <div className="text-red-500 font-bold mr-[7px]">
            <MdDeleteOutline  size={20}/>
          </div> 
          <button className="text-red-500  font-semibold" onClick={handleOpenCancelTour} >Cancel Appointment</button>
        </div>
      </div>
    </div>

    <CancelTour isOpen={isCancelTourOpen} onClose={handleCloseCancelTour} />
  </div>
);

export default BookingCard;
