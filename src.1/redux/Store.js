import { createStore, combineReducers } from 'redux';
import { commentsReducer } from './Reducers';


export default createStore(combineReducers({
    comments: commentsReducer
}));