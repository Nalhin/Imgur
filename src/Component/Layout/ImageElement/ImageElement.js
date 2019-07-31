import React from 'react';
import './ImageElement.scss';

const ImageElement = ({ src }) => {
    return (
        // <div className="image-container">
        <React.Fragment>
            <img src={src} className="image-container__image" alt="error" />
        </React.Fragment>
        // </div>
    );
};

export default ImageElement;
