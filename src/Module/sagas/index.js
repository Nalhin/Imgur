import {takeEvery} from 'redux-saga/effects';

import {getFavoritesSaga} from './favorites';
import {INIT_GET_FAVORITES} from '../actions/actionTypes'


export function* watchGetFavorites(){

    yield takeEvery(INIT_GET_FAVORITES,getFavoritesSaga);
}