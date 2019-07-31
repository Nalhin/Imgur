import React from 'react';
import axios from 'axios';
import { MdFavorite } from 'react-icons/md';
import classNames from 'classnames';

import Disclaimer from './Disclaimer/Disclaimer';
import CenterImage from './CenterImage/CenterImage';
import Source from './Source/Source';
import './RandomImage.scss';

const generateId = (size = 5) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str = '';
    while (size--) {
        str += chars[(Math.random() * chars.length) | 0];
    }
    return str;
};

const RandomImage = () => {
    const [src, setSrc] = React.useState([]);
    const [position, setPosition] = React.useState(-1);
    const srcSize = src.length - 1;

    const generateImage = () => {
        const imageId = generateId();
        const url = `https://i.imgur.com/${imageId}.jpg`;

        fetch(url) //check if image exists on server
            .then(response => {
                console.log(response);
                if (response.url === url) {
                    setSrc([...src, { image: url, fav: false }]);
                    setPosition(position + 1);
                } else generateImage();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const back = () => {
        if (position > 0) setPosition(position - 1);
    };

    const forward = () => {
        if (position < srcSize) setPosition(position + 1);
    };

    const setFav = () => {
        if (!src[position].fav)
            axios
                .post('https://imgurgenerator.firebaseio.com/images.json', {
                    image: src[position].image,
                })
                .then(() => {
                    src[position].fav = true;
                })
                .catch(error => console.log(error));
    };

    const favClass = classNames({
        'random-image-container__favorite': true,
        'random-image-container__favorite--is-fav': position >= 0 && src[position].fav,
    });

    return (
        <div className="random-image-container">
            <Disclaimer />
            <button className="random-image-container__generate-button" onClick={generateImage}>
                Generate
            </button>
            {position >= 0 && (
                <React.Fragment>
                    <CenterImage
                        back={back}
                        forward={forward}
                        src={src[position].image}
                        showBack={position > 0}
                        showForward={position < srcSize}
                    />

                    <MdFavorite onClick={setFav} className={favClass} />

                    <Source src={src[position].image} />
                </React.Fragment>
            )}
        </div>
    );
};

export default RandomImage;
