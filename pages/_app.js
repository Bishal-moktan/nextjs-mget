import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import Login from './login';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname === '/login')
    return (
      <Provider store={store}>
        <Login /> <ToastContainer autoClose={2000} />
      </Provider>
    );
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer autoClose={2000} />
      </Provider>
    </>
  );
}
