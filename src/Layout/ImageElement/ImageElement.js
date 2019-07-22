import React from 'react';
import './ImageElement.scss';

const ImageElement = ({ src }) => {
    return (
        <div className="image-container">
            <img src={src} className="image-container__image" alt="error 2137" />
        </div>
    );
};

export default ImageElement;
