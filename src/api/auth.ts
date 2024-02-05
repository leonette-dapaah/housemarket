import { createStore, Action } from 'redux';
import { toast } from 'react-toastify';
import axios from 'axios';

// Define action types
interface LoginAction extends Action {
  type: 'LOGIN';
  payload: { username: string; password: string };
}

interface LogoutAction extends Action {
  type: 'LOGOUT';
}

// Define action creators
export const login = (userData: { username: string; password: string }): LoginAction => {
  return {
    type: 'LOGIN',
    payload: userData,
  };
};

export const logout = (): LogoutAction => {
  return {
    type: 'LOGOUT',
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

type UserActionTypes = LoginAction | LogoutAction;

const userReducer = (state: UserState = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userData: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        userData: null,
        
      };
    default:
      return state;
  }
  
};

// Create the store
const store = createStore(userReducer);



// API functions
export const loginApi = async (userData: { username: string; password: string }) => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    // setIsLoading(true)
    const payload = {
      username: userData.username,
      password: userData.password,
      
    }
    console.log(payload);
    
    try {
      const response = await axios.post(
        `${apiUrl}/login`, 
        payload,
        {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
      );
      
      console.log({response});
      console.log(response.data);
      // Store User Data in LocalStorage
      localStorage["user_key"] = response.data.access_token;
      localStorage["user_key_type"] = response.data.token_type;
      localStorage["user_email"] = response.data.user.email;
      localStorage["user_name"] = response.data.user.first_name +' '+response.data.user.last_name;
      localStorage["user_img"] = response.data.user.profileimg;
      localStorage["user_id"] = response.data.user.id;
      
      // store.dispatch(login(userData));
      
      // setIsLoggedIn(true);
      toast.success('You have successfully Logged into your account!');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      // onClose();

    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error('Login failed:', errorMessage);
      toast.error("Sorry, something went wrong. Please try again later.");
    }
};

export const logoutApi = (): void => {
  // Perform logout logic (e.g., API calls) here
  // ...
  localStorage.removeItem('user_key');
    localStorage.removeItem('user_key_type');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_img');
};



export default store;
