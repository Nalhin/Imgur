import React from 'react';
import {MdClose} from 'react-icons/md';

import ImageElement from '../../ImageElement/ImageElement';
import './FavoriteImage.scss';

const FavoriteImage = ({ image, deleteFavorites }) => {
    const deleteFav = React.useCallback(() => {
        deleteFavorites(image.id);
    }, [image, deleteFavorites]);

    return (
        <div className="favorite-image" >
         
            <MdClose className="favorite-image__delete-button" onClick={deleteFav}></MdClose>
            <ImageElement src={image.image} />
        </div>
    );
};

export default FavoriteImage;
