import * as actionTypes from '../actions/actionTypes';

const isLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return true;
        case actionTypes.REMOVE_LOADING:
            return false;
        default:
            return state;
    }
};

export default isLoadingReducer;
