import AskQuestion from "@/components/askQuestion";
import RequestTour from "@/components/requestTour";
import React from "react";
import { useState, useEffect } from 'react';
import { IoMapOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi";
import { useParams } from 'react-router-dom';


const apiUrl = import.meta.env.VITE_API_BASE_URL;

export const PropertyDetails: React.FC = () => {

    let {id} = useParams()
    console.log(id);

    const [propertyDetails, setPropertyDetails] = useState<PropertyDetailsData | null>(null);

    const [activeTab, setActiveTab] = useState('overview');

    // Function to handle tab clicks
    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    const [isAskQuestionOpen, setAskQuestionOpen] = useState(false);

    const handleOpenAskQuestion = () => {
      setAskQuestionOpen(true);
    };
  
    const handleCloseAskQuestion = () => {
      setAskQuestionOpen(false);
    };

    const [isRequestTourOpen, setRequestTourOpen] = useState(false);

    const handleOpenRequestTour = () => {
      setRequestTourOpen(true);
    };
  
    const handleCloseRequestTour = () => {
      setRequestTourOpen(false);
    };

    useEffect(() => {
        const fetchPropertyDetails = async () => {
          // Replace the following line with your actual API or data fetching logic
          const response = await fetch(`${apiUrl}/properties/user/${id}`, {
            method: "GET"
        });    
          const data: PropertyDetailsData = await response.json();
          setPropertyDetails(data);
        };
    
        fetchPropertyDetails();
    }, [id]);
    
 

    interface PropertyDetailsData {
        name: string;
        location: string;
        images: string[];

    }
    if (!propertyDetails) {
        return <div>Loading...</div>;
    }
    

    return (
        <div>
            <div  className="flex justify space between">
                <div>
                    <img src="http://localhost:5173/src/assets/images/tile.jpg.jpg" alt="#" className="w-[1100px] mt-[60px] ml-[70px]" />
                </div>
                <div className="ml-[40px]">
                <img src="http://localhost:5173/src/assets/images/tile2.jpg.jpg" alt="#" className="w-[550px] mt-[60px] mb-[58px]" />
                <img src="http://localhost:5173/src/assets/images/tile3.jpg.jpg" alt="#" className="w-[550px]" />
                </div>
            </div>
            <div className="flex justify-end gap-x-5 mt-[-65px] mr-[30px]">
                <div className="flex gap-2 px-6 py-4 bg-yellow-300 text-[#060F42] rounded-md">
                  <button className="">VIEW ON MAP</button>
                  <IoMapOutline size={24}/>
                </div>
                <div className="flex gap-2 px-6 py-4 bg-[#060F42] text-white rounded-md">
                  <button className="">VIEW ALL</button>
                  <FaRegImage  size={24}/>
                </div>
            </div>
            <div className="flex justify-end items-center gap-2 mt-[20px]">
                <p className="text-2xl">Favourite this property</p>
                <HiOutlineHeart size={27} />
            </div>
            <h1 className="text-center mt-[50px] font-faustina">{propertyDetails.name}</h1>
            <p className="text-center">{propertyDetails.location}</p>
            <p className="text-center">2 beds 2 baths</p>
            <div className="flex gap-10 text-[20px] ml-[70px] mt-[50px]">
                <button onClick={() => handleTabClick('overview')} className={`tab-btn focus:outline-none ${activeTab === 'favorites' ? 'border-b-2 border-black' : 'font-200' }`}>Overview</button>
                <button onClick={() => handleTabClick('amenities')} className={`tab-btn focus:outline-none ${activeTab === 'favorites' ? 'border-b-2 border-black' : 'font-200' }`}>Amenities</button>
                <button onClick={() => handleTabClick('floor plan')} className={`tab-btn focus:outline-none ${activeTab === 'favorites' ? 'border-b-2 border-black' : 'font-200' }`}>Floor Plan</button>
            </div>
            <h2 className="border-b border-b-1 border-[#060F42] mb-[30px] ml-[70px] mt-[50px] pb-[15px] text-[23px] -[#060F42] font-bold">
                Description
            </h2>
            <div className="flex justify space between">
                <div className="ml-[70px] w-[1000px]">
                    <p className=" text-[18px] ">Lorem ipsum dolor sit amet consectetur. Potenti consequat amet faucibus massa eget tristique. Integer nibh nunc morbi mauris nunc etiam. Vitae velit at sem nec etiam suspendisse.Lorem ipsum dolor sit amet consectetur. Potenti consequat amet faucibus massa eget tristique. Integer nibh nunc morbi mauris nunc etiam. Vitae velit at sem nec etiam suspendisse.Lorem ipsum dolor sit amet consectetur. Potenti consequat amet faucibus massa eget tristique. Integer nibh nunc morbi mauris nunc etiam. Vitae velit at sem nec etiam suspendisse.Lorem ipsum dolor sit amet consectetur. Potenti consequat amet faucibus massa eget tristique. Integer nibh nunc morbi mauris nunc etiam. Vitae velit at sem nec etiam suspendisse.</p>
                </div>
                <div className="flex flex-col ml-auto">
                <button className="bg-[#060F42] p-2 text-[white] font-bold border border-[#060F42] rounded w-[230px]" onClick={handleOpenRequestTour}>REQUEST A TOUR</button>
                    <p className="text-center mt-[30px] font-bold">Or</p>
                    <button className="bg-white border border border-[#060F42] p-2 mt-[30px] text-[#060F42] font-bold rounded w-[230px]"  onClick={handleOpenAskQuestion}>ASK A QUESTION</button>
                </div>
            </div>
            <h2 className="border-b border-b-1 border-[#060F42] mb-[30px] ml-[70px] mt-[50px] pb-[15px] text-[23px] text-[#060F42] font-bold">
                Amenities
            </h2>
            <div className="flex justify space between gap-60 ml-[70px]">
                <div>
                    <ul className="text-[20px]">
                        <li>Bathroom</li>
                        <li>Kitchen</li>
                        <li>Porch</li>
                        <li>Swimming Pool</li>
                        <li>Patio</li>
                    </ul>
                </div>
                <div>
                    <ul className="text-[20px]">
                        <li>Bathroom</li>
                        <li>Kitchen</li>
                        <li>Porch</li>
                        <li>Swimming Pool</li>
                        <li>Patio</li>
                    </ul>
                </div>
                <div>
                    <ul className="text-[20px]">
                        <li>Bathroom</li>
                        <li>Kitchen</li>
                        <li>Porch</li>
                        <li>Swimming Pool</li>
                        <li>Patio</li>
                    </ul>
                </div>
            </div>
            <h2 className="border-b border-b-1 border-[#060F42] mb-[30px] ml-[70px] mt-[50px] pb-[15px] text-[23px] text-[#060F42] font-bold">
                Floor Plan
            </h2>
            <div className="mb-[100px]">
                <img src="http://localhost:5173/src/assets/images/plan.jpg" alt="#" className="w-[800px] mt-[60px] ml-[70px]" />
            </div>

            <AskQuestion isOpen={isAskQuestionOpen} onClose={handleCloseAskQuestion} />
            <RequestTour isOpen={isRequestTourOpen} onClose={handleCloseRequestTour} />
        </div>
    );
}


export default PropertyDetails;