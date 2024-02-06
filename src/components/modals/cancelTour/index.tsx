import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";


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
    
      const handleCloseModal = (e: React.MouseEvent) => {
        // Check if the click occurred outside the modal content
        if (e.target === e.currentTarget) {
          onClose();
        }
      };
    

  return (
    <div
        onClick={handleCloseModal} className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-10 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-10 w-[550px] h-[320px] mt-[0px] z-3 rounded-xl">
        <div className='flex justify-space-between'>
          <h1 className='text-center text-060F42 text-[30px] font-faustina'>Cancel Tour</h1>
          <div className='bg-gray-200 rounded-md ml-[290px] w-[30px] h-[30px] p-1'>
            <IoClose  size={21} role="button" onClick={onClose}/>
          </div>
        </div>
        <p className='text-center mt-[50px]'>You are about to cancel this tour appointment. Please be sure before doing so.</p>
        <div className='mt-[60px] flex gap-3'>
          <button className='bg-white p-3 w-[250px] h-[50px] rounded-md text-[#060F42] font-semibold border border-[#060F42]' onClick={onClose}>NO, DON'T CANCEL</button>
          <button  className='bg-red-500  p-3 w-[250px] rounded-md text-white font-semibold' onClick={onClose} >YES, CANCEL IT</button>
        </div>
      </div>
    </div>
  );
};

export default cancelTour;
