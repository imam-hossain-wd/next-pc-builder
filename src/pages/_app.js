import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import store from "../redux/store";
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Navbar />
        <Toaster />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
