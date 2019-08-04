import React from 'react';
import './ImageElement.scss';

const ImageElement = ({ src, onLoad }) => {
    return (
        <React.Fragment>
            <img src={src} onLoad={onLoad} className="image-container__image" alt="error" />
        </React.Fragment>
    );
};

export default ImageElement;
