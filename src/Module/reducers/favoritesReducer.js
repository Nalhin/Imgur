import * as actionTypes from '../actions/actionTypes';

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_FAVORITES_SUCCEEDED:
            return action.favorites.reverse();
        case actionTypes.DELETE_FAVORITES_SUCCEEDED:
            return state.filter(element => element.id !== action.id);
        default:
            return state;
    }
};

export default favoritesReducer;
