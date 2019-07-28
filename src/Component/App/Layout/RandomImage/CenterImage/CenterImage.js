import React from 'react';
import {MdStar,MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md';

import ImageElement from '../../ImageElement/ImageElement';
import './CenterImage.scss';

const CenterImage = ({ src,  back, forward, setFav }) => {
    return (
        <div className="image-container">
            <ImageElement src={src} />
            <MdStar className="image-container__star" onClick={setFav}></MdStar>
            <MdKeyboardArrowLeft className="image-container__left image-container__arrow" onClick={back}></MdKeyboardArrowLeft>
            <MdKeyboardArrowRight className="image-container__right image-container__arrow" onClick={forward}></MdKeyboardArrowRight>
        </div>
    );
};

export default CenterImage;
