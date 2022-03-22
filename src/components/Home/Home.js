import React from 'react';
import Image from '../../images/Group 12.png'
import './Home.css'

const Home = () => {
    return (
        <div className='wrapper'>
            <div>
                <p className='discount-text'>Sale up to 70% off</p>
                <h1>New Collection For Fall</h1>
                <p className='title-text'>Discover all the new arrivals of ready-to-wear collection.</p>
                <button>Shop Now</button>
            </div>
            <div className='img-section'>
                <img src={Image} alt="" />
            </div>
        </div>
    );
};

export default Home;