import axios from 'axios';

const url = 'https://imgurgenerator.firebaseio.com/images';

export const fetchGetFavorites = () => {
    return axios
        .get(`${url}.json`)
        .then(response => {
            const favorites = [];
            Object.keys(response.data).forEach(element => {
                favorites.push({ image: response.data[element].image, id: element });
            });
            return favorites;
        })
        .catch(error => ({ error }));
};

export const fetchDeleteFavorites = id => {
    return axios
        .delete(`${url}/${id}.json`)
        .then(response => response)
        .catch(error => error);
};
