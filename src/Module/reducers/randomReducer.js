import * as actionTypes from '../actions/actionTypes';

const randomReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.GET_RANDOM_SUCCEEDED:
            return [...state, { src: action.random, id: '' }];
        case actionTypes.GET_RANDOM_SET_FAV_SUCCEEDED:
            return state.map(image =>
                image.src === action.src ? { ...image, id: action.id } : image
            );
        case actionTypes.GET_RANDOM_DELETE_FAV_SUCCEEDED:
            return state.map(image => (image.id === action.id ? { ...image, id: '' } : image));
        default:
            return state;
    }
};

export default randomReducer;
