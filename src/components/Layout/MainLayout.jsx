import React, { useEffect } from 'react';
import Header from './Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';




const MainLayout = () => {

    const location = useLocation();
    useEffect(() => {

        if (location.pathname == '/') {
            document.title = `Product-Home`
        } else {
            document.title = `Product ${location.pathname.replace('/', '-')}`
        }
        if (location.state) {
            document.title = `${location.state}`
        }

    }, [location.pathname])

    return (
        <div className=' container 2xl:container mx-auto '>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;