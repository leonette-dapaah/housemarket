import AskQuestion from "@/components/askQuestion";
import React from "react";
import { useState } from 'react';

export const PropertyDetails: React.FC = () => {

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
            <h1 className="text-center mt-[50px] font-faustina">Pearl Apartments</h1>
            <p className="text-center">2nd 1 Nii Jorn Street, Alajo</p>
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
                    <button className="bg-[#060F42] p-2 text-[white] font-bold border-2 border-[#060F42] rounded w-[230px]" onClick={handleOpenAskQuestion}>REQUEST A TOUR</button>
                    <p className="text-center mt-[30px] font-bold">Or</p>
                    <button className="bg-white border border-2 border-[#060F42] p-2 mt-[30px] text-[#060F42] font-bold rounded w-[230px]">ASK A QUESTION</button>
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
        </div>
    );
}


export default PropertyDetails;