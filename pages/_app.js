import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AppProvider } from '@/hooks/useGlobalContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </>
  );
}
