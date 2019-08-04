import { put, call, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as Api from '../api';

const generateId = (size = 5) => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str = '';
    while (size--) {
        str += chars[(Math.random() * chars.length) | 0];
    }
    return str;
};

export function* getRandomSaga() {
    try {
        let random;
        while (!random) {
            const imageId = generateId();
            random = yield call(Api.fetchGetRandom, imageId);
        }
        yield all([
            put({ type: actionTypes.GET_RANDOM_SUCCEEDED, random }),
            put({ type: actionTypes.INCREMENT_POSITION }),
        ]);
    } catch (error) {
        yield put({ type: actionTypes.GET_RANDOM_FAILED, error });
    }
}

export function* getRandomSetFavSaga(action) {
    try {
        const id = yield call(Api.fetchSetFavRandom, action.src);
        yield put({ type: actionTypes.GET_RANDOM_SET_FAV_SUCCEEDED, id: id, src: action.src });
    } catch (error) {
        yield put({ type: actionTypes.GET_RANDOM_SET_FAV_FAILED, error });
    }
}
