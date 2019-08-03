import React from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import ImageElement from '../../ImageElement/ImageElement';
import './CenterImage.scss';

const CenterImage = ({ src, back, forward, showBack, showForward }) => {
    return (
        <div className="image-container">
            <ImageElement src={src} />

            {showBack ? (
                <MdNavigateBefore
                    className="image-container__left image-container__arrow"
                    onClick={back}
                />
            ) : null}
            {showForward ? (
                <MdNavigateNext
                    className="image-container__right image-container__arrow"
                    onClick={forward}
                />
            ) : null}
        </div>
    );
};

export default CenterImage;
