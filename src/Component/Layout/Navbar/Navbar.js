import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink
                to="/"
                className="navbar__element"
                activeClassName="navbar__element--active"
                exact
            >
                Random
            </NavLink>
            <NavLink
                to="/favorites"
                className="navbar__element"
                activeClassName="navbar__element--active"
            >
                Favorites
            </NavLink>
        </nav>
    );
};

export default Navbar;
