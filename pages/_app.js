import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import { wrapper } from '@/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Open_Sans } from '@next/font/google';

const font = Open_Sans({
  weight: ['300', '500', '600'],
  subsets: ['latin'],
});

function App({ Component, pageProps }) {
  return (
    <>
      <div className={font.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer autoClose={2000} />
      </div>
    </>
  );
}

export default wrapper.withRedux(App);
