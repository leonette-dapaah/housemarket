import React, { useState } from "react";
import icon from '@/assets/images/bookingImg.jpg';

const Bookings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("incoming");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="w-full h-full bg-white p-4 mt-[60px] ml-[45px]">
      <p className="text-[60px] font-faustina mb-[20px]">Bookings</p>
      <div className="border-b border-gray-300 mb-4 mt-4 w-[1750px]">
        {/* Tabs */}
        <div className="flex gap-10 text-[20px]">
          {/* Button for Incoming tab */}
          <button
            onClick={() => handleTabClick("incoming")}
            className={`tab-btn focus:outline-none ${
              activeTab === "incoming" ? "border-b-2 border-black" : "font-200"
            }`}
          >
            Incoming
          </button>
          {/* Button for Completed tab */}
          <button
            onClick={() => handleTabClick("completed")}
            className={`tab-btn focus:outline-none ${
              activeTab === "completed"
                ? "border-b-2 border-black"
                : "text-[#060F42]"
            }`}
          >
            Completed
          </button>
          {/* Button for Cancelled tab */}
          <button
            onClick={() => handleTabClick("cancelled")}
            className={`tab-btn focus:outline-none ${
              activeTab === "cancelled"
                ? "border-b-2 border-black"
                : "text-[#060F42]"
            }`}
          >
            Cancelled
          </button>
        </div>
      </div>
      {/* Tab Contents */}
      {/* Incoming content */}
      <div
        id="content-incoming"
        className={`tab-content ${activeTab !== "incoming" ? "hidden" : ""}`}
      >
        <div className="flex items-center justify-center mb-[-160px]">
          <div>
            <img src={icon} alt="#" className="w-[250px] h-[300px] mx-auto" />
            <p className="mb-[400px]">Sorry! You have no booking at the moment. Go to the Rent section to start.</p>
          </div>
        </div>
      </div>
      {/* Completed content */}
      <div
        id="content-completed"
        className={`tab-content ${activeTab !== "completed" ? "hidden" : ""}`}
      >
        <div className="flex items-center justify-center mb-[-160px]">
          <div>
            <img src={icon} alt="#" className="w-[250px] h-[300px] mx-auto" />
            <p className="mb-[400px]">Sorry! You have no booking at the moment. Go to the Rent section to start.</p>
          </div>
        </div>
      </div>
      {/* Cancelled content */}
      <div
        id="content-cancelled"
        className={`tab-content ${activeTab !== "cancelled" ? "hidden" : ""}`}
      >
        <div className="flex items-center justify-center mb-[-160px]">
          <div>
            <img src={icon} alt="#" className="w-[250px] h-[300px] mx-auto" />
            <p className="mb-[400px]">Sorry! You have no booking at the moment. Go to the Rent section to start.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
