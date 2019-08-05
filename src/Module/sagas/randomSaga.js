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

export function* getRandomSaga(action) {
    try {
        let random;
        yield put({ type: actionTypes.SET_LOADING });
        while (!random) {
            const imageId = generateId();
            random = yield call(Api.fetchGetRandom, imageId);
        }
        if (action.position);
        yield all([
            put({ type: actionTypes.GET_RANDOM_SUCCEEDED, random }),
            action.position
                ? put({ type: actionTypes.SET_POSITION, position: action.position })
                : put({ type: actionTypes.INCREMENT_POSITION }),
            put({ type: actionTypes.REMOVE_LOADING }),
        ]);
    } catch (error) {
        yield put({ type: actionTypes.GET_RANDOM_FAILED, error });
    }
}

export function* getRandomSetFavSaga(action) {
    try {
        const id = yield call(Api.fetchSetFavRandom, action.src);
        yield put({ type: actionTypes.SET_FAV_RANDOM_SUCCEEDED, id: id, src: action.src });
    } catch (error) {
        yield put({ type: actionTypes.SET_FAV_RANDOM_FAILED, error });
    }
}
