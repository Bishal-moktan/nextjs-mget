import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

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
