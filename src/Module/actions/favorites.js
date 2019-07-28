import * as actionTypes from './actionTypes';

export const getFavorites = () => ({
    type: actionTypes.GET_FAVORITES_REQUESTED,
});

export const deleteFavorites = id => ({
    type: actionTypes.DELETE_FAVORITES_REQUESTED,
    id: id,
});
