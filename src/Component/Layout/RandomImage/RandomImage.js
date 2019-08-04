import React from 'react';
import { MdFavorite } from 'react-icons/md';
import classNames from 'classnames';

import Disclaimer from './Disclaimer/Disclaimer';
import CenterImage from './CenterImage/CenterImage';
import Source from './Source/Source';
import './RandomImage.scss';

const RandomImage = ({
    position,
    random,
    getRandom,
    incrementPosition,
    decrementPosition,
    setFav,
    deleteFav,
}) => {
    const srcSize = random.length - 1;
    const back = () => {
        if (position > 0) decrementPosition();
    };

    const forward = () => {
        if (position < srcSize) incrementPosition();
    };

    const setFavorite = React.useCallback(() => {
        if (random[position].id) deleteFav(random[position].id);
        else setFav(random[position].src);
    }, [position, setFav, random, deleteFav]);

    const favClass = classNames({
        'random-image-container__favorite': true,
        'random-image-container__favorite--is-fav': position >= 0 && random[position].id,
    });
    return (
        <div className="random-image-container">
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

                    <MdFavorite onClick={setFavorite} className={favClass} />

                    <Source src={random[position].image} />
                </React.Fragment>
            )}
            <Disclaimer />
        </div>
    );
};

export default RandomImage;
