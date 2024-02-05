
import React, { useState, useEffect, ChangeEvent } from 'react';
import HouseCard from '@/components/housecards';
import { houseData } from '@/data/housedata';
import Switch from '@/components/switch'; // Adjust the path based on your project structure
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from "moment";
import { PropertyDetails } from "@/features/propertyDetails";
import { usePropertyStore } from "@/store/store";
import {useGetFavourites } from '@/store/favourites';
import { useNavigate, Link } from "react-router-dom";
import { RiMap2Line } from 'react-icons/ri';
import { userActionsStore } from '@/store/userStore';
import { deleteUser } from '@/api/user';



const Fav: React.FC = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('favorites');
  // Function to handle tab clicks
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const userId = localStorage.getItem('user_id')
  console.log(userId);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  // Function to handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  
  const { favourites, fetchAndSetFavourites } = useGetFavourites();
  const { deleteUser } = userActionsStore();


  useEffect(() => {
    fetchAndSetFavourites(userId);
    console.log(favourites);
  }, []);
  
  

  const [selectedApartment, setSelectedApartment] = useState<string>('Select Apartment');

  const handleApartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedApartment(event.target.value);
    // These variables need to be defined outside the function to be used in the MapComponent
  };
  
  // State for notification toggle 
  const [notificationEnabled, setNotificationEnabled] = useState(false);
  const [emailNotification, setEmailNotification] = useState(false);
  const [pushNotification, setPushNotification] = useState(false);
  const [favNotification, setFavNotification] = useState(false);
  const [lastNotification, setLastNotification] = useState(false);

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
  
  return (
    <div className="w-full h-full bg-white p-4 mt-[100px] ml-[45px] ">
      {/* Grey line under tabs */}
      <div className="border-b border-gray-300 mb-4 mt-4">
        {/* Active Tab Name */}
        <h1 className="text-[34px] mb-4 capitalize text-[50px] font-faustina mb-[60px] ml-45px mt-[-50px] text-[#060F42] lg:text-[60px]">
          {activeTab === 'account' ? 'Account Settings' : activeTab}
        </h1>

        {/* Tabs */}
        <div className="flex gap-10 text-[20px]">
          {/* Button for Favorites tab */}
          <button
            onClick={() => handleTabClick('favorites')}
            className={`tab-btn focus:outline-none ${activeTab === 'favorites' ? 'border-b-2 border-black' : 'font-200' }`}
          >
            Favorites
          </button>
          {/* Button for Account Settings tab */}
          <button
            onClick={() => handleTabClick('account')}
            className={`tab-btn focus:outline-none ${activeTab === 'account' ? 'border-b-2 border-black' : 'text-[#060F42]'}`}
          >
            Account Settings
          </button>
          {/* Button for Notifications tab */}
          <button
            onClick={() => handleTabClick('notifications')}
            className={`tab-btn focus:outline-none ${activeTab === 'notifications' ? 'border-b-2 border-black' : 'text-[#060F42]'}`}
          >
            Notifications
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      {/* Favorites content */}
      <div id="content-favorites" className={`tab-content ${activeTab !== 'favorites' ? 'hidden' : ''}`}>
        <div className='hidden lg:block md:block lg:flex justify-self-start mt-[-160px]  lg:mt-[50px] mb-[20px] gap-4 md:flex flex-center md:mr-0'>
          <div>
            <h3 style={{ marginRight: 20 }} className="font-semibold mt-[10px]">Sorted By</h3>
          </div>
          <div>
            <select
              className="border rounded-md p-[12px] w-[200px]"
              value={selectedApartment}
              onChange={handleApartmentChange}
            >
              <option value="Select Apartment">Recommended</option>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedrooms">2 Bedrooms</option>
            </select>
          </div>
          <Link to="/features/buy">
            <div>
              <button className='border rounded-md p-[12px] w-[150px] text-white' style={{ backgroundColor: '#070058' }}><RiMap2Line  className='text-white mb-[-25px]'/> Maps</button>
            </div>
          </Link>
        </div>
        <div id="content-favorites" className={`tab-content ${activeTab !== 'favorites' ? 'hidden' : ''}`}>
          <div className='hidden lg:block md:block lg:flex justify-self-start mt-[-160px]  lg:mt-[50px] mb-[20px] gap-4 md:flex flex-center md:mr-0'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 lg:mt-[10px] mt-[-40px]" onClick={PropertyDetails}>
              {/* Display a message when there are no liked items */}
              {favourites?.length === 0 ? (
                <p className='mb-[400px] mt-[100px]'>You have no items in your Favourites.</p>
              ) : (
                // Map through the liked items and display HouseCard components
                favourites?.map((favourites:any) => {
                  return (
                    favourites && (
                      <HouseCard
                        key={favourites.id}
                        imageSrc={favourites.images[0].file_content}
                        streetName={favourites.streetName}
                        price={favourites.price}
                        bed={favourites.bed}
                        created_at={moment(favourites.created_at).fromNow()}
                      />
                    )
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Account content */}
      <div id="content-account" className={`tab-content ${activeTab !== 'account' ? 'hidden' : ''}`}>
        <p className='mt-[40px] text-[30px] font-faustina lg:text-[40px] mb-[30px]'>Personal Information</p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-96 lg:w-[420px] rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-96 lg:w-[420px] rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">
              Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              placeholder="Number"
              value={formData.number}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 w-96 lg:w-[420px] rounded-lg"
            />
          </div>
        </form>
        <h1  className='mt-[50px] font-faustina text-[30px] lg:text-[40px]'>Sign in & Security</h1>
        <div className='flex justify space between gap-[1280px] border-b border-gray-300'>
          <div>
            <p  className='text-[20px] font-semibold mt-[50px]'>Email</p>
            <p className='text-gray-400'>The Email address associated with your account</p>
          </div>
          <div className='lg:mt-[70px] lg:ml-[0px] md:ml-[-900px] md:mt-[70px]'>
            <button className='font-bold text-[#070058]'>Verify</button>
            <button className='font-bold text-[#070058] ml-[20px]'>Edit</button>
          </div>
        </div>
        <div className='flex justify space between gap-[1180px] border-b border-gray-300'>
          <div>
            <p className='text-[20px] font-semibold mt-[50px]'>Password</p>
            <p className='lg:text-gray-400 md:w-[500px] md:text-gray-400 w-full'>Set a unique password to protect your account</p>
          </div>
          <div>
            <button className='lg:ml-[-153px] p-4 text-[#070058] bg-white lg:mt-[25px] border-2 border-primary focus:outline-none focus:border-[#070058] rounded w-[200px] font-bold md:ml-[-1020px] md:mt-[35px]'>CREATE PASSWORD</button>
          </div>
        </div>
        <div className='flex justify space between gap-[680px] border-b border-gray-300'>
          <div>
            <p  className='text-[20px] font-semibold mt-[50px]'>Google Sign in</p>
            <p className='lg:text-gray-400 md:w-[400px] md:text-gray-400'>You've linked your Google account to Zillow and are using it to sign in. You are signed in as adzokopearl@gmail.com.</p>
          </div>
          <div>
            <button className='lg:ml-[447px] p-4 text-[#070058] bg-white lg:mt-[25px] border-2 border-primary focus:outline-none focus:border-[#070058] rounded w-[200px] font-bold md:ml-[-420px] md:mt-[60px]'>UNLINK</button>
          </div>
        </div>
        <h1 className='mt-[50px] font-faustina text-[40px]'>Manage Account</h1>
        <div className='flex justify space between gap-[680px] border-b border-gray-300 w-full'>
          <div>
            <p  className='text-[20px] font-semibold mt-[50px]'>Deactivate my account</p>
            <p className='lg:text-gray-400 md:text-gray-400 md:w-[400px]' >This will shut down your account, but retain your information. You won't be able to sign in again until your account is reactivated.</p>
          </div>
          <div>
            <button onClick={() => handleDeactivateAccount(userId)} className='lg:ml-[480px] font-bold text-[#070058] mt-[70px] md:ml-[-390px]'>Deactivate account</button>
          </div>
        </div>
        <div className='flex justify space between gap-[1100px] border-b border-gray-300 mb-[100px]'>
          <div>
            <p  className='text-[20px] font-semibold  mt-[50px]'>Privacy & Cookies</p>
            <p className='lg:text-gray-400 md:text-gray-400 md:w-[400px]'>Tools that allow you to see and manage your personal data.</p>
          </div>
          <div>
            <button className='lg:ml-[55px] font-bold text-[#070058] mt-[70px] md:ml-[-815px]'>Go to Privacy Portal</button>
          </div>
        </div>
      </div>
      {/* Notifications content */}
      <div id="content-notifications" className={`tab-content ${activeTab !== 'notifications' ? 'hidden' : ''}`}>
        <div className="flex items-center mb-4">
          <p className="text-lg mr-4 mb-[70px]">
            Get notifications from Zillow so you can stay on top of your journey to home.
            Turn them off any time you’d like.
          </p>
          <div className='ml-auto'>
            <Switch
              checked={notificationEnabled}
              onChange={() => setNotificationEnabled(!notificationEnabled)}
            />
          </div>
        </div>
        <h3 className='text-[25px] font-bold mb-[20px] '>Search</h3>
        <p className='font-bold text-[20px] mb-[20px]  '>Home Recommendaions</p>
        <div className='flex items-center mb-4'> 
          <p>Email Notification</p>
          <div className='ml-auto'>
            <Switch
              checked={emailNotification}
              onChange={() => setEmailNotification(!notificationEnabled)}
            />
          </div>
        </div>
        <div className='flex items-center mb-4'> 
          <p>Push Notification</p>
          <div className='ml-auto'>
            <Switch
              checked={pushNotification}
              onChange={() => setPushNotification(!notificationEnabled)}
            />
          </div>
        </div>
        <h3 className='text-[25px] font-bold mb-[20px] mt-[40px]  '>Favourites</h3>
        <p className='font-bold text-[20px] mb-[20px]  '>Property Updates</p>
        <div className='flex items-center mb-4'> 
          <p>Email Notification</p>
          <div className='ml-auto'>
            <Switch
              checked={favNotification}
              onChange={() => setFavNotification(!notificationEnabled)}
            />
          </div>
        </div>
        <div className='flex items-center mb-4'> 
          <p>Push Notification</p>
          <div className='ml-auto'>
            <Switch
              checked={lastNotification}
              onChange={() => setLastNotification(!notificationEnabled)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fav;
