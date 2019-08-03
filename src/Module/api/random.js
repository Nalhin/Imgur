import axios from 'axios';
import { url } from './url';

export const fetchGetRandom = imageId => {
    const url = `https://i.imgur.com/${imageId}.jpg`;
    return fetch(url) //check if image exists on server
        .then(response => {
            if (response.url === url) {
                return url;
            }
            return null;
        })
        .catch(error => {
            console.log(error);
        });
};

export const fetchSetFavRandom = image => {
    axios
        .post(url, {
            image: image.src,
        })
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(error => console.log(error));
};
