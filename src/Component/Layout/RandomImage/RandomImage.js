import React from 'react';
import Disclaimer from './Disclaimer/Disclaimer';
import CenterImage from './CenterImage/CenterImage';
import Source from './Source/Source';

const RandomImage = ({ src, back, forward, setFav, generateImage, current }) => {
    return (
        <div>
            <Disclaimer />
            <button onClick={generateImage}>Generate</button>
            
            {current>=0 ? 
                <React.Fragment>
                    <CenterImage back={back} forward={forward} setFav={setFav} src={src[current].image} />
                    <Source src={src[current].image} />
                </React.Fragment>
          :null}
        </div>
    );
};

export default RandomImage;
