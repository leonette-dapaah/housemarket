import { createStore, Action } from 'redux';
import { toast } from 'react-toastify';
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react'
import { useModalStore } from "@/store/store";
import { userDetails } from '@/store/createUser';
import LoginModal from '@/components/modals/signin';



// Define action types for signup
interface SignupAction extends Action {
  type: 'SIGNUP';
  payload: { username: string; password: string; email: string };
}

// Define action creator for signup
export const signup = (userData: { username: string; password: string; email: string }): SignupAction => {
  return {
    type: 'SIGNUP',
    payload: userData,
  };
};

// Define the user state
interface UserState {
    userData: { username: string } | null;
  }
  
  // Define the reducer
  const initialState: UserState = {
    userData: null,
  };
  
  type UserActionTypes = SignupAction | SignupAction;


// Define the reducer for signup
const signupReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(signupReducer);

// API function for signup
export const signupApi = async (userData: { username: string; password: string; email: string }) => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const payload = {
      username: userData.username,
      password: userData.password,
      email: userData.email,
    };
    
    try {
      // Make API call for signup
      const response = await axios.post(
        `${apiUrl}/signup`, 
        payload,
        {
          headers: {'Content-Type': 'application/json'}
        }
      );  

      // Assuming the server returns some data upon successful signup
      console.log('Signup successful:', response.data);

      // Additional logic to store user data or perform actions if needed
      // ...
                                                                                                                                                                                                                                            
      // Dispatch the signup action
      store.dispatch(signup(userData));

      // Show success message
      toast.success('You have successfully signed up!');

    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error('Signup failed:', errorMessage);
      toast.error("Sorry, something went wrong. Please try again later.");
    }
};
