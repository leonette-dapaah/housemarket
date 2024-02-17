// store/userStore.ts
import { create } from 'zustand';
import { deleteUser } from '@/api/user';
// import { loginApi, logoutApi } from '../api/auth';

interface UserStore {
  userData: { 
    username: string,
  } | null;
  login: (userData: { username: string, password: string }) => void;
  logout: () => void;
}

export const userStore = create<UserStore>((set) => ({
  userData: null,
  login: (userData) => {
    // loginApi(userData);
    set({ userData });
  },
  logout: () => {
    // logoutApi();
    set({ userData: null });
  },
}));


interface UserActions {
  deleteUser: (userId:string) => Promise<{
    success: boolean,
    response: any
  }>;
}

export const userActionsStore = create<UserActions>((set) => ({
  deleteUser: async (userId) => {
    try {
      const response = await deleteUser(userId);
      return {
        success:true,
        response
      }
    } catch (error) {
        console.log(error)
        return {
          success:false,
          response:error
        }
    }
  }
})
)