import * as actionTypes from '../actions/actionTypes';

const randomReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_RANDOM_SUCCEEDED:
            return [...state, { src: action.random, id: '' }];
        default:
            return state;
    }
};

export default randomReducer;
