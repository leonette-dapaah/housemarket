// store/favoritesStore.ts
import create from 'zustand';
import { getFavourites, postFavourites } from '@/api/favourites';

type FavouritesType = Record<string, any>;

interface FavouritesState {
  favourites: FavouritesType[];
  setFavourites: (favourites: FavouritesType[]) => void;
  fetchAndSetFavourites: (user_id:any) => Promise<void>;
}


export const useGetFavourites = create<FavouritesState>((set) => ({
  favourites: [],
  setFavourites: (favourites) => set({ favourites }),
  fetchAndSetFavourites: async (user_id) => {
    try { 
      const favouritesResponse = await getFavourites(user_id);
      set({ favourites: favouritesResponse });
    }
    catch(e) {
      console.log(e);
      throw e;
    }
  },
}));

interface PostFavourites {
  addFavourite: (propertyID:string, userID:any) => Promise<{
      success:boolean;
      errorMessage:string|null;
      response?:any;
  }>;
}


export const usePostFavourite = create<PostFavourites>(() => ({
  addFavourite:async (propertyID:string, userID:any) => {
      try {
          const favourites = await postFavourites(propertyID, userID) 
          return {
              success:true,
              errorMessage:null,
              response:favourites,
          }
      } catch (error) {
          const errorMessage = (error as Error).message;
          console.error('Failed to add to favourite:', errorMessage);
          return {
              success:false,
              errorMessage
          }
      }
  }
}
));
