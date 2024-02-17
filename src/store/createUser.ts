// store/userStore.ts
import { create } from 'zustand';
import axios from 'axios';
import { toast } from 'react-toastify';

interface UserState {
  userInfo: {
    username: string;
  } | null;
  signup: (userInfo: {
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    password: string;
    phone_number: string;
    mobile_number: string;
    postal_address: string;
    residential_address: string;
  }) => Promise<void>;
}

export const userDetails = create<UserState>((set) => ({
  userInfo: null,
  signup: async (userInfo) => {
    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      // Call signup API logic here
      const response = await axios.post(apiUrl, userInfo);

      // Update the Zustand store with the response data
      set({ userInfo: response.data });
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error('Login failed:', errorMessage);
      toast.error("Sorry, something went wrong. Please try again later.");
    }
  },
}));
