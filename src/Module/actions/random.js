import * as actionTypes from './actionTypes';

export const getRandom = () => ({
    type: actionTypes.GET_RANDOM_REQUESTED,
});

export const getRandomSetFav = src => ({
    type: actionTypes.GET_RANDOM_SET_FAV_REQUESTED,
    src,
});
