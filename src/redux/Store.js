

import { createStore, combineReducers } from 'redux';
import { placeReducer } from './Reducers';

export default createStore(combineReducers({ placeReducer }));