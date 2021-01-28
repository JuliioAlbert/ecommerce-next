import "../scss/global.scss";
import 'semantic-ui-css/semantic.min.css'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default  function MyApp({ Component, pageProps }) {
  return <>
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
  </>
}


