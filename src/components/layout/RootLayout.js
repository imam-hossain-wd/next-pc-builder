import React from 'react';
import Navbar from '../ui/Navbar';

const RootLayout = ({children}) => {
    return (
        <>
        <Navbar/>
        <div>{children}</div>
        <footer>This is footer</footer>
            
        </>
    );
};

export default RootLayout;