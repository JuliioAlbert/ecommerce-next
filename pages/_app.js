import { useMemo, useState } from 'react';
import jwtDecoded from 'jwt-decode';

import "../scss/global.scss";
import 'semantic-ui-css/semantic.min.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext';
import {setToken} from '../providers/token';

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState('');
  console.log(auth);
  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecoded(token).id
    })
  }

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout : () => null,
      setReloudUser : () => null
    }),[]
  )

  return (
    <AuthContext.Provider value={authData}>
      <Component {...pageProps} />
      <ToastContainer
        autoclose={5000}
        newestOnTop
        closeButton
        closeOnClick
        rtl={false}
        pausedOnFocusLoss={false}
        draggable
        pauseOnMover
        position="top-right" />
    </AuthContext.Provider>
  )
}


