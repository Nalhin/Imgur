import React from 'react';
import './ImageElement.scss';

const ImageElement = ({ src }) => {
    return (
        <div>
            <img src={src} className="image" alt="error 2137" />
        </div>
    );
};

export default ImageElement;
