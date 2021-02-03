import { useMemo, useState, useEffect } from 'react';
import jwtDecoded from 'jwt-decode';
import { useRouter } from 'next/router';
import "../scss/global.scss";
import 'semantic-ui-css/semantic.min.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../context/AuthContext';
import { setToken, getToken, removeToken } from '../providers/token';

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const router = useRouter();



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

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push('/');
    }
  }

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
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


