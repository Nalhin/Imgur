import React from 'react';
import axios from 'axios';
import { MdFavorite } from 'react-icons/md';
import classNames from 'classnames';

import Disclaimer from './Disclaimer/Disclaimer';
import CenterImage from './CenterImage/CenterImage';
import Source from './Source/Source';
import './RandomImage.scss';

const RandomImage = ({ position, random, getRandom, incrementPosition, decrementPosition }) => {
    const srcSize = random.length - 1;
    const back = () => {
        if (position > 0) decrementPosition();
    };

    const forward = () => {
        if (position < srcSize) incrementPosition();
    };

    const setFav = () => {
        if (!random[position].id)
            axios
                .post('https://imgurgenerator.firebaseio.com/images.json', {
                    image: random[position].image,
                })
                .then(() => {
                    random[position].id = true;
                })
                .catch(error => console.log(error));
    };

    const favClass = classNames({
        'random-image-container__favorite': true,
        'random-image-container__favorite--is-fav': position >= 0,
    });
    return (
        <div className="random-image-container">
            <Disclaimer />
            <button className="random-image-container__generate-button" onClick={getRandom}>
                Generate
            </button>
            {position >= 0 && (
                <React.Fragment>
                    <CenterImage
                        back={back}
                        forward={forward}
                        src={random[position].src}
                        showBack={position > 0}
                        showForward={position < srcSize}
                    />

                    <MdFavorite onClick={setFav} className={favClass} />

                    <Source src={random[position].image} />
                </React.Fragment>
            )}
        </div>
    );
};

export default RandomImage;
