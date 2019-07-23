import  {put} from 'redux-saga/effects';
import axios from 'axios';
import * as ActionTypes from '../actions/actionTypes';


export function* getFavoritesSaga(action) {
   
    const favorites = [];
    const response = yield axios.get('https://imgurgenerator.firebaseio.com/images.json')

    Object.keys(response.data).forEach(element => {
        favorites.push(response.data[element].image);
    })

    yield put({ type: ActionTypes.GET_FAVORITES, favorites: favorites });
}
