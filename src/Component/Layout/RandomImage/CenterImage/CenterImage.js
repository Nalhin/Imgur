import React from 'react';
import ImageElement from '../../ImageElement/ImageElement';


const CenterImage = ({ src,  back, forward, setFav }) => {
    return (
        <div>
            <ImageElement src={src} />
            <button onClick={back}>Back</button>
            <button onClick={forward}>Forward</button>
            <button onClick={setFav}>Set fav</button>
        </div>
    );
};

export default CenterImage;
