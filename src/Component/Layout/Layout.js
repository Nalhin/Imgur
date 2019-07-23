import React from 'react';
import axios from 'axios';
import RandomImage from './RandomImage/RandomImage';
import Navbar from './Navbar/Navbar';
import Favorites from './Favorites/FavoritesContainer';
import { Route } from 'react-router-dom';
import './Layout.scss';

const Layout = () => {
    const [src, setSrc] = React.useState([]);
    const [position, setPosition] = React.useState(0);
    const current = src.length - 1 - position;

    const generateImage = () => {
        const imageId = [
            Math.random()
                .toString(36)
                .substr(2, 5),
        ]
            .map(element => (Math.random() > 0.5 ? element : element.toUpperCase()))
            .join('');

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
                    // setFavImages([...favImages, src[src.length - 1 - position].image]);
                })

                .catch(error => console.log(error));
    };

    return (
        <div className="layout">
            <Navbar />

            <Route
                path="/"
                exact
                render={() => (
                    <RandomImage
                        src={src}
                        current={current}
                        back={back}
                        forward={forward}
                        setFav={setFav}
                        generateImage={generateImage}
                    />
                )}
            />
            {/* favImages={favImages} */}
            <Route path="/favorites" render={() => <Favorites />} />
        </div>
    );
};

export default Layout;
