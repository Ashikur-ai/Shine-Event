import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;