import * as actionTypes from '../actions/actionTypes';

const positionReducer = (state = -1, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_POSITION:
            return state + 1;
        case actionTypes.DECREMENT_POSITION:
            return state - 1;
        case actionTypes.SET_POSITION:
            return action.position + 1;
        default:
            return state;
    }
};

export default positionReducer;
