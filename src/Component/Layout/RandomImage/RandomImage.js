import React from 'react';
import PropTypes from 'prop-types';

import Disclaimer from './Disclaimer/Disclaimer';
import ImageElement from '../ImageElement/ImageElement';
import BottomPanel from './BottomPanel/BottomPanel';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { setPosition } from '../../../Module/actions/position';
import './RandomImage.scss';

const RandomImage = ({
    position,
    random,
    getRandom,
    incrementPosition,
    decrementPosition,
    setFav,
    deleteFav,
    isLoading,
}) => {
    const srcSize = random.length - 1;
    const showBack = position > 0;
    const showForward = position < srcSize;

    const back = React.useCallback(() => {
        if (showBack) decrementPosition();
    }, [showBack, decrementPosition]);

    const forward = React.useCallback(() => {
        if (showForward) incrementPosition();
    }, [showForward, incrementPosition]);

    const setFavorite = React.useCallback(() => {
        if (random[position].id) deleteFav(random[position].id);
        else setFav(random[position].src);
    }, [position, setFav, random, deleteFav]);

    const getRandomImage = React.useCallback(() => {
        if (position !== srcSize) getRandom(srcSize);
        else getRandom();
    }, [position, srcSize, getRandom]);

    return (
        <div className="random-image-container">
            <button className="random-image-container__generate-button" onClick={getRandomImage}>
                Generate
            </button>
            {position >= 0 && (
                <React.Fragment>
                    <LoadingSpinner isLoading={isLoading}>
                        <ImageElement src={random[position].src} />
                    </LoadingSpinner>
                    <BottomPanel
                        back={back}
                        forward={forward}
                        id={random[position].id}
                        showBack={showBack}
                        showForward={showForward}
                        setFavorite={setFavorite}
                    />
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
