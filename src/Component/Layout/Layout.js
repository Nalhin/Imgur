import React from 'react';
import { Route } from 'react-router-dom';
import RandomImage from './RandomImage/RandomImageContainer';
import Navbar from './Navbar/Navbar';
import Favorites from './Favorites/FavoritesContainer';
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
