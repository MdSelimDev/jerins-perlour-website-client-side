import React from 'react';
import Banner from '../Banner/Banner';
import Facial from '../Facial/Facial';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeServices />
            <Facial/>
        </div>
    );
};

export default Home;