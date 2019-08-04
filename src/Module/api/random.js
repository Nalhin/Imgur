import axios from 'axios';
import { url } from './url';

export const fetchGetRandom = imageId => {
    const fetchUrl = `https://i.imgur.com/${imageId}.jpg`;
    return fetch(fetchUrl) //check if image exists on server
        .then(response => {
            if (response.url === fetchUrl) {
                return fetchUrl;
            }
            return null;
        })
        .catch(error => error);
};

export const fetchSetFavRandom = src => {
    return axios
        .post(`${url}.json`, {
            image: src,
        })
        .then(response => {
            return response.data.name;
        })
        .catch(error => error);
};
