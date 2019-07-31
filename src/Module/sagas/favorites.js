import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';

const url = 'https://imgurgenerator.firebaseio.com/images';

export function* getFavoritesSaga(action) {
    try {
        const favorites = [];
        const response = yield axios.get(`${url}.json`);

        Object.keys(response.data).forEach(element => {
            favorites.push({ image: response.data[element].image, id: element });
        });

        yield put({ type: actionTypes.GET_FAVORITES_SUCCEEDED, favorites });
    } catch (error) {
        yield put({ type: actionTypes.GET_FAVORITES_FAILED, error });
    }
}

export function* deleteFavoritesSaga(action) {
    try {
        console.log(action);
        const id = action.id;
        yield axios.delete(`${url}/${id}.json`);
        yield put({ type: actionTypes.DELETE_FAVORITES_SUCCEEDED, id });
    } catch (error) {
        console.log(error);
        yield put({ type: actionTypes.DELETE_FAVORITES_FAILED, error });
    }
}
