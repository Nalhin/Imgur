import { GET_FAVORITES } from '../actions/actionTypes';

const recentlyUsedReducer = (state = [], action) => {
    switch (action.type) {
        case GET_FAVORITES:
            return action.favorites;
        default:
            return state;
    }
};

export default recentlyUsedReducer;
