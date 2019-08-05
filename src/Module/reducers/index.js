import { combineReducers } from 'redux';
import favorites from './favoritesReducer';
import random from './randomReducer';
import position from './positionReducer';
import isLoading from './isLoadingReducer';

export default combineReducers({
    favorites: favorites,
    random: random,
    position: position,
    isLoading: isLoading,
});
