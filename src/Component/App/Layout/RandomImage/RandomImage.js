import React from 'react';
import axios from 'axios';

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
    const [position, setPosition] = React.useState(0);
    const current = src.length - 1 - position;

    const generateImage = () => {
        const imageId = generateId();
        const url = `https://i.imgur.com/${imageId}.jpg`;

        fetch(url) //check if image exists on server
            .then(response => {
                if (response.url === url) setSrc([...src, { image: url, fav: false }]);
                else generateImage();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const back = () => {
        if (src.length - position > 1) setPosition(position + 1);
    };

    const forward = () => {
        if (position > 0) setPosition(position - 1);
    };

    const setFav = () => {
        if (!src[src.length - 1 - position].fav)
            axios
                .post('https://imgurgenerator.firebaseio.com/images.json', {
                    image: src[src.length - 1 - position].image,
                })
                .then(() => {
                    src[src.length - 1 - position].fav = true;
                })
                .catch(error => console.log(error));
    };

    return (
        <div className="random-image-container">
            <Disclaimer />
            <button className="random-image-container__generate-button" onClick={generateImage}>Generate</button>

            {current >= 0 ? (
                <React.Fragment>
                    <CenterImage
                        back={back}
                        forward={forward}
                        setFav={setFav}
                        src={src[current].image}

                    />
                    <Source src={src[current].image} />
                </React.Fragment>
            ) : null}
        </div>
    );
};

export default RandomImage;
