import React from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

const RootLayout = ({children}) => {
    return (
        <>
        <Navbar/>
        <div className='min-h-screen'>{children}</div>
        <Footer/>
            
        </>
    );
};

export default RootLayout;