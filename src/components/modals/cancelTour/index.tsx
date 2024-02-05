import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';


interface CancelTourProps {
    isOpen: boolean;
    onClose: () => void;
  }

const cancelTour: React.FC<CancelTourProps> = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
          }
        };
    
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [isOpen, onClose]);
    

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-8 w-[500px] h-1/2 mt-[200px] z-3">
        <h1 className='text-center text-060F42'>Cancel Tour</h1>
        <p>You are about to cancel this tour appointment. Please be sure before doing so.</p>
        <div className='mt-[40px] flex gap-3'>
          <button className='bg-white p-3 w-[170px] rounded-md text-[#060F42] font-semibold border border-[#060F42]'>NO, DON'T CANCEL</button>
          <button  className='bg-red-500  p-3 w-[370px] rounded-md text-white font-semibold'>YES, CANCEL IT</button>
        </div>
      </div>
    </div>
  );
};

export default cancelTour;
