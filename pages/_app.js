import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import '@/styles/globals.css';
import { wrapper } from '@/store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Signika } from '@next/font/google';

const font = Signika({
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
