import { put, call, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as Api from '../api';

export function* getFavoritesSaga() {
    try {
        const favorites = yield call(Api.fetchGetFavorites);
        yield put({ type: actionTypes.GET_FAVORITES_SUCCEEDED, favorites });
    } catch (error) {
        yield put({ type: actionTypes.GET_FAVORITES_FAILED, error });
    }
}

export function* deleteFavoritesSaga(action) {
    try {
        yield call(Api.fetchDeleteFavorites, action.id);
        yield all([
            put({ type: actionTypes.DELETE_FAVORITES_SUCCEEDED, id: action.id }),
            put({ type: actionTypes.GET_RANDOM_DELETE_FAV_SUCCEEDED, id: action.id }),
        ]);
    } catch (error) {
        yield put({ type: actionTypes.DELETE_FAVORITES_FAILED, error });
    }
}
