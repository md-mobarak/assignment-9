import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>

            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/reviews'>REVIEWS</NavLink>
            <NavLink to='/dashboard'>DASHBOARD</NavLink>
            <NavLink to='/blogs'> BLOGS</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
        </div>
    );
};

export default Navbar;