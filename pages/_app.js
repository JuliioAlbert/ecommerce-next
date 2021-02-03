import { useMemo, useState, useEffect } from 'react';
import jwtDecoded from 'jwt-decode';

import "../scss/global.scss";
import 'semantic-ui-css/semantic.min.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext';
import { setToken, getToken } from '../providers/token';

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        idUser: jwtDecoded(token).id
      })
    } else {
      setAuth(null)
    }
    setReloadUser(false);
  }, [reloadUser])

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
      logout: () => null,
      setReloudUser,
    }), [auth]
  );

  if (auth === undefined) return null;

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


