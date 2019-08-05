import { takeEvery, all } from 'redux-saga/effects';

import { getFavoritesSaga, deleteFavoritesSaga } from './favoritesSaga';
import * as actionTypes from '../actions/actionTypes';
import { getRandomSaga, getRandomSetFavSaga } from './randomSaga';

export function* rootSaga() {
    yield all([
        yield takeEvery(actionTypes.GET_FAVORITES_REQUESTED, getFavoritesSaga),
        yield takeEvery(actionTypes.DELETE_FAVORITES_REQUESTED, deleteFavoritesSaga),
        yield takeEvery(actionTypes.GET_RANDOM_REQUESTED, getRandomSaga),
        yield takeEvery(actionTypes.SET_FAV_RANDOM_REQUESTED, getRandomSetFavSaga),
    ]);
}
