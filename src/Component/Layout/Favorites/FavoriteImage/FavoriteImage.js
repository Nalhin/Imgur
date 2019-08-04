import React from 'react';
import { MdClose } from 'react-icons/md';

import ImageElement from '../../ImageElement/ImageElement';
import './FavoriteImage.scss';

const FavoriteImage = ({ image, deleteFavorites }) => {
    const deleteFav = React.useCallback(() => {
        deleteFavorites(image.id);
    }, [image, deleteFavorites]);

    const [isLoaded, setIsLoaded] = React.useState(false);

    const load = () => {
        setIsLoaded(true);
    };

    return (
        <div className="favorite-image">
            {isLoaded && <MdClose className="favorite-image__delete-button" onClick={deleteFav} />}
            <ImageElement onLoad={load} src={image.src} />
        </div>
    );
};

export default FavoriteImage;
