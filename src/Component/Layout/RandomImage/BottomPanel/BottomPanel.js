import React from 'react';
import { MdNavigateBefore, MdNavigateNext, MdFavorite } from 'react-icons/md';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './BottomPanel.scss';

const BottomPanel = ({ showBack, showForward, back, forward, setFavorite, id }) => {
    const favClass = classNames({
        'random-image-container__favorite': true,
        'random-image-container__favorite--is-fav': id,
    });
    return (
        <div className="random-image-container__bottom-panel">
            {showBack && (
                <MdNavigateBefore
                    className="random-image-container__arrow random-image-container__arrow--left"
                    onClick={back}
                />
            )}
            <MdFavorite onClick={setFavorite} className={favClass} />
            {showForward && (
                <MdNavigateNext
                    className="random-image-container__arrow random-image-container__arrow--right"
                    onClick={forward}
                />
            )}
        </div>
    );
};

BottomPanel.propTypes = {
    showBack: PropTypes.bool.isRequired,
    showForward: PropTypes.bool.isRequired,
    back: PropTypes.func.isRequired,
    forward: PropTypes.func.isRequired,
    setFavorite: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default BottomPanel;
