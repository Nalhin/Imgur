import React from 'react';
import ImageElement from './ImageElement/ImageElement';
import Disclaimer from './Disclaimer/Disclaimer';
import Source from './Source/Source';

const Layout = () => {
    const [src, setSrc] = React.useState('');

    const generateImage = () => {
        const imageId = Math.random()
            .toString(36)
            .substr(2, 5);

        const image = new Image();
        image.src = `https://i.imgur.com/${imageId}.jpg`;
        image.onload = () => {
            if (image.height === 81 && image.width === 161) generateImage();
            else setSrc(`https://i.imgur.com/${imageId}.jpg`);
        };
    };

    return (
        <div className="layout">
            <Disclaimer />
            <button onClick={generateImage}>Generate</button>
            {src ? <ImageElement src={src} /> : null}
            <Source src={src} />
        </div>
    );
};

export default Layout;
