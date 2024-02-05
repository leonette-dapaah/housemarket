import { bookTour, getBookings } from '@/api/tour';
import axios from 'axios';
import { toast } from 'react-toastify';
import create from 'zustand';

// interface TourData {
//   id: string;
//   name: string;
//   email: string;
//   phone_number: string;
//   tour_type: string;
//   tour_date_time: string;
//   property_id: string;
//   user_id: string;
// }

interface TourState {
    createTour: (data:any) => Promise<{
        success:boolean;
        errorMessage:string|null;
        response?:any;
    }>;
  }
  

export const useCreateTour = create<TourState>(() => ({
    createTour:async (data:any) => {
        try {
            const tour = await bookTour(data) 
            return {
                success:true,
                errorMessage:null,
                response:tour,
            }
        } catch (error) {
            const errorMessage = (error as Error).message;
            console.error('Tour Request failed:', errorMessage);
            return {
                success:false,
                errorMessage
            }
        }
    }
 }
));


type BookingType = Record<string, any>;

interface BookingStoreInterface {
  bookings: BookingType[];
  setBookings: (bookings: BookingType[]) => void;
  fetchAndSetBookings: () => Promise<void>;
}

export const useBookingStore = create<BookingStoreInterface>((set) => ({
  bookings: [],
  setBookings: (bookings) => set({ bookings }),
  fetchAndSetBookings: async () => {
    try { 
      const response = await getBookings();
      set({ bookings: response });
    }
    catch(e) {
      console.log(e);
      throw e;
    }
  },
}));
  
