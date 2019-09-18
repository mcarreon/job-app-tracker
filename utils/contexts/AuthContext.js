import { useState } from 'react';

const AuthContext = React.createContext([{}, () => {}]);

const AuthProvider = (props) => {
  const [state, setState] = useState({
    email: "",
    isLoggedIn: false
  });

  return (
    <AuthContext.Provider value={[state, setState]}>
      {props.children}
    </AuthContext.Provider>
  );
}


export { AuthContext, AuthProvider };