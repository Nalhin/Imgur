import React from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

import withLoading from '../../../hoc/withLoading';
import ImageElement from '../../ImageElement/ImageElement';
import './CenterImage.scss';

const CenterImage = ({ src, back, forward, showBack, showForward }) => {
    const [isLoaded, setIsLoaded] = React.useState(false);

    const load = React.useCallback(() => {
        showBack && setIsLoaded(true);
    }, [showBack, setIsLoaded]);

    return (
        <div className="image-container">
            <ImageElement src={src} onLoad={load} />

            {showBack && isLoaded && (
                <MdNavigateBefore
                    className="image-container__left image-container__arrow"
                    onClick={back}
                />
            )}
            {showForward && (
                <MdNavigateNext
                    className="image-container__right image-container__arrow"
                    onClick={forward}
                />
            )}
        </div>
    );
};

export default withLoading(CenterImage);
