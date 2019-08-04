import React from 'react';
import PropTypes from 'prop-types';

import Disclaimer from './Disclaimer/Disclaimer';
import Source from './Source/Source';
import ImageElement from '../ImageElement/ImageElement';
import './RandomImage.scss';
import BottomPanel from './BottomPanel/BottomPanel';

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

    const showBack = position > 0;
    const showForward = position < srcSize;

    const back = React.useCallback(() => {
        if (showBack) decrementPosition();
    }, [showBack]);

    const forward = React.useCallback(() => {
        if (showForward) incrementPosition();
    }, [showForward]);

    const setFavorite = React.useCallback(() => {
        if (random[position].id) deleteFav(random[position].id);
        else setFav(random[position].src);
    }, [position, setFav, random, deleteFav]);

    return (
        <div className="random-image-container">
            <button className="random-image-container__generate-button" onClick={getRandom}>
                Generate
            </button>
            {position >= 0 && (
                <React.Fragment>
                    <ImageElement src={random[position].src} />
                    <BottomPanel
                        back={back}
                        forward={forward}
                        id={random[position].id}
                        showBack={showBack}
                        showForward={showForward}
                        setFavorite={setFavorite}
                    />
                    <Source src={random[position].image} />
                </React.Fragment>
            )}
            <Disclaimer />
        </div>
    );
};

RandomImage.propTypes = {
    position: PropTypes.number.isRequired,
    random: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
    getRandom: PropTypes.func.isRequired,
    incrementPosition: PropTypes.func.isRequired,
    decrementPosition: PropTypes.func.isRequired,
    setFav: PropTypes.func.isRequired,
    deleteFav: PropTypes.func.isRequired,
};

export default RandomImage;
