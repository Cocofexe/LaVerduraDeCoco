import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

    return (
        <div className='NavBarBackgroundGrid'>
            <Link to={'/catalogue'} style={{ textDecoration: 'none' }}>
            <h1 className='NavBarTitle'>LaVerduleriaDeCoco</h1>        
            </Link>
            <Link to={`/cart`} className='NavBarBtnOne'>
                  <i className='material-icons'>shopping_cart</i>
            </Link>
        </div>
    );
};

export default NavBar;
