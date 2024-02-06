import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'react-toastify';
import { IoClose } from "react-icons/io5";
import { deleteUser } from '@/api/user';
import { userActionsStore } from '@/store/userStore';


interface DeactivateAccountProps {
    isOpen: boolean;
    onClose: () => void;
  }

const deactivateAccount: React.FC<DeactivateAccountProps> = ({ isOpen, onClose }) => {
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
    
    // const { deleteUser } = userActionsStore();
    const handleDeactivateAccount = async (userId:string) => {
        // try {
        //   const apiUrl = import.meta.env.VITE_API_BASE_URL;
        //   const response = await axios.delete(`${apiUrl}/user/{id}`);
        //   console.log({response});
        //   toast.success('Account deactivated successfully');
        //   window.location.reload();
        // } catch (error) {
        //   toast.error('Error deactivating account');
        //   console.error('Error deactivating account:', error);
        // }
        const { success, response } = await deleteUser(userId)
        if (success){
          toast.success('Account deactivated successfully');
          // navigate("/")
        }
        else {
          console.log(response);
        }
    };

    const userId = localStorage.getItem('user_id')
    console.log(userId);


  return (
    <div
        onClick={handleCloseModal} className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-10 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="bg-white p-10 w-[550px] h-[320px] mt-[0px] z-3 rounded-xl">
        <div className='flex justify-space-between'>
          <h1 className='text-center text-060F42 text-[30px] font-faustina'>Deactivate Account</h1>
          <div className='bg-gray-200 rounded-md ml-[190px] w-[30px] h-[30px] p-1'>
            <IoClose  size={21} role="button" onClick={onClose}/>
          </div>
        </div>
        <p className='text-center mt-[50px]'>You are about to deactivate your account. Please be sure before doing so.</p>
        <div className='mt-[60px] flex gap-3'>
          <button className='bg-white p-3 w-[250px] h-[50px] rounded-md text-[#060F42] font-semibold border border-[#060F42]' onClick={onClose}>NO, DON'T DEACTIVATE</button>
          <button  className='bg-red-600  p-3 w-[250px] rounded-md text-white font-semibold' onClick={() => handleDeactivateAccount(userId)} >YES, DEACTIVATE IT</button>
        </div>
      </div>
    </div>
  );
};

export default deactivateAccount;
