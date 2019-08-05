import * as actionTypes from './actionTypes';

export const getRandom = position => ({
    type: actionTypes.GET_RANDOM_REQUESTED,
    position,
});

export const getRandomSetFav = src => ({
    type: actionTypes.SET_FAV_RANDOM_REQUESTED,
    src,
});
