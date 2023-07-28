
// import Footer from '@/components/ui/Footer';
// import Navbar from '@/components/ui/Navbar';
// import { store } from '@/redux/store';
// import '@/styles/globals.css'
// import { SessionProvider } from "next-auth/react"
// import { Provider } from 'react-redux';
// export default function App({ Component, pageProps }) {

//   return(
//     <SessionProvider session={pageProps.session}>
//     <Provider store={store}>
//     <Navbar/>
//     <Component {...pageProps} />
//     <Footer/>
//     </Provider>
//     </SessionProvider>

   
//   );
// }
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { store } from '@/redux/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
}




 

