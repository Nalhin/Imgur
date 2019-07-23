import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';


import combineReducers from '../reducers/index';
import {watchGetFavorites} from '../sagas/index'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchGetFavorites)

export default store;