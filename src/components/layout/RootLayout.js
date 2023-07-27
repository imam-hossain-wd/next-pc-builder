import React from 'react';

const RootLayout = ({children}) => {
    return (
        <>
        <nav>this is navbar</nav>
        <div>{children}</div>
        <footer>This is footer</footer>
            
        </>
    );
};

export default RootLayout;