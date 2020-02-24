import React from 'react';
import Navigation from './Navigation';
import Banner from './Banner';

const ServicesPage = ()=>{
    return(
        <div className="page">
            <h1>
            <Navigation/>
            <Banner/>
            </h1>
        </div>
    )
}

export default ServicesPage;