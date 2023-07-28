
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return(
    <SessionProvider session={pageProps.session}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
   
  );
}



