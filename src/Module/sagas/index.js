import { takeEvery, all } from 'redux-saga/effects';

import { getFavoritesSaga, deleteFavoritesSaga } from './favorites';
import * as actionTypes from '../actions/actionTypes';


export function* rootSaga() {
    yield all([
        yield takeEvery(actionTypes.GET_FAVORITES_REQUESTED, getFavoritesSaga),
        yield takeEvery(actionTypes.DELETE_FAVORITES_REQUESTED, deleteFavoritesSaga),
    ]);
}
