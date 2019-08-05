import * as actionTypes from '../actions/actionTypes';

const randomReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_RANDOM_SUCCEEDED:
            return [...state, { src: action.random, id: '' }];
        case actionTypes.SET_FAV_RANDOM_SUCCEEDED:
            return state.map(image =>
                image.src === action.src ? { ...image, id: action.id } : image
            );
        case actionTypes.DELETE_FAV_RANDOM_SUCCEEDED:
            return state.map(image => (image.id === action.id ? { ...image, id: '' } : image));
        default:
            return state;
    }
};

export default randomReducer;
