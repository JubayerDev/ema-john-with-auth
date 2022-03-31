import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'><img src={Logo} alt="logo" /></Link>
            <div className='nav-items'>
                <a href="/shop">Shop</a>
                <Link to="/orders">Orders</Link>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;