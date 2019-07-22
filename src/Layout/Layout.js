import React from 'react';
import axios from 'axios';
import ImageElement from './ImageElement/ImageElement';
import Disclaimer from './Disclaimer/Disclaimer';
import Source from './Source/Source';
import './Layout.scss';

const Layout = () => {
    const [src, setSrc] = React.useState([]);
    const [position, setPosition] = React.useState(0);
    const [favImages, setFavImages] = React.useState([]);

    React.useEffect(() => {
        const favourites = [];
        axios.get('https://imgurgenerator.firebaseio.com/images.json').then(response =>
            Object.keys(response.data).forEach(element => {
                favourites.push(response.data[element].image);
            })
        );
        setFavImages(favourites);
    }, []);

    const generateImage = () => {
        const imageId = Math.random()
            .toString(36)
            .substr(2, 5);

        const image = new Image();
        image.src = `https://i.imgur.com/${imageId}.jpg`;
        image.onload = () => {
            if (image.height === 81 && image.width === 161) generateImage();
            else {
                setSrc([...src, { image: `https://i.imgur.com/${imageId}.jpg`, fav: false }]);
                setPosition(0);
            }
        };
    };

    const back = () => {
        if (src.length - position > 1) setPosition(position + 1);
    };

    const forward = () => {
        if (position > 0) setPosition(position - 1);
    };

    const setFav = () => {
        if (!src[src.length - 1 - position].fav)
            axios
                .post('https://imgurgenerator.firebaseio.com/images.json', {
                    image: src[src.length - 1 - position].image,
                })
                .then(() => {
                    src[src.length - 1 - position].fav = true;
                    setFavImages([...favImages, src[src.length - 1 - position].image]);
                })

                .catch(error => console.log(error));
    };

    return (
        <div className="layout">
            <Disclaimer />
            <button onClick={generateImage}>Generate</button>
            {src.length > 0 ? (
                <div>
                    <ImageElement src={src[src.length - 1 - position].image} />
                    <Source src={src[src.length - 1 - position].image} />
                </div>
            ) : null}
            <button onClick={back}>Back</button>
            <button onClick={forward}>Forward</button>
            <button onClick={setFav}>Set fav</button>
            {favImages ? favImages.map(image => <ImageElement src={image} key={image} />) : null}
        </div>
    );
};

export default Layout;
