import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <dir className='rightSide'>
                <a href="/Home">Home</a>
                <a href="/Shop">Shop</a>
                <a href="/Inventory">Inventory</a>
                <a href="/Login">Login</a>
            </dir>
        </nav>
    );
};

export default Header;