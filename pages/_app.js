import '@/styles/globals.css';
import { wrapper } from '@/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Open_Sans } from '@next/font/google';
import dynamic from 'next/dynamic';

const openSans = Open_Sans({
  weight: ['300', '500', '600'],
  subsets: ['latin'],
});

const Navbar = dynamic(() => import('@/components/Navbar/Navbar'));
const Footer = dynamic(() => import('@/components/Footer/Footer'));

function App({ Component, pageProps }) {
  return (
    <>
      <div className={openSans.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
}

export default wrapper.withRedux(App);
