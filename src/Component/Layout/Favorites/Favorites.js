import React from 'react';
import ImageElement from '../ImageElement/ImageElement';

const Favorites = ({ favorites, getFavorites }) => {
    React.useEffect(() => {
        getFavorites();
    }, [getFavorites]);

    return <div>{favorites ? favorites.map(image => <ImageElement src={image} key={image} />) : null}</div>;
};
export default Favorites;
