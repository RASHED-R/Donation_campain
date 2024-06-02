import React from 'react';
import Banner from '../../components/Banner/Banner';
import Products from '../../components/Products/Products';
const Home = () => {

    return (
        <div className=' container mx-auto'>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;