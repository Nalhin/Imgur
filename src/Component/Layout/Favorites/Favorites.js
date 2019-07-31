import React from 'react';

import FavoriteImage from './FavoriteImage/FavoriteImage';
import './Favorites.scss';

const Favorites = ({ favorites, getFavorites, deleteFavorites }) => {
    React.useEffect(() => {
        getFavorites();
    }, [getFavorites]);

    return (
        <div className="favorites">
            {favorites
                ? favorites.map(image => (
                      <FavoriteImage image={image} deleteFavorites={deleteFavorites} key={image.id} />
                  ))
                : null}
        </div>
    );
};

export default Favorites;
