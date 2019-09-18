import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
  const [state, setState] = useContext(AuthContext);

  const loginUser = (user) => {
    setState(state => ({
      ...state, 
      isLoggedIn: true,
      email: user 
    }));
  }

  const logoutUser = () => {
    setState(state => ({
      ...state, 
      isLoggedIn: false,
      email: "" 
    }));
  }

  return {
    isLoggedIn: state.isLoggedIn,
    email: state.email,
    loginUser,
    logoutUser
  }
}

export default useAuth;