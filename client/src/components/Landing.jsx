import React from 'react';
import './Landing.css'
import {Link} from 'react-router-dom';

const Landing = () => {

    return (
        <div className='LandingBackground'>
            <h1 className='LandingTitle'>LaVerduleriaDeCoco</h1>   
            <Link to={`/catalogue`} className='LandingButton'>
            Buy Epic Vegetables {'&'} fruits
            </Link> 
        </div>
    );
};

export default Landing;
