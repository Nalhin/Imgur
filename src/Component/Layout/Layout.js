import React from 'react';
import RandomImage from './RandomImage/RandomImage';
import Navbar from './Navbar/Navbar';
import Favorites from './Favorites/FavoritesContainer';
import { Route } from 'react-router-dom';
import './Layout.scss';

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <Route path="/" exact component={RandomImage} />
            <Route path="/favorites" component={Favorites} />
        </div>
    );
};

export default Layout;
