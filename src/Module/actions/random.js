import * as actionTypes from './actionTypes';

export const getRandom = () => ({
    type: actionTypes.GET_RANDOM_REQUESTED,
});

export const getRandomAddFav = src => ({
    type: actionTypes.GET_RANDOM_ADD_FAV_REQUESTED,
    src,
});
