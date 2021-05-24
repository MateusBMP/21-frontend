import { combineReducers } from 'redux';

import jogadorReducer from './jogadorReducer';
import salaReducer from './salaReducer';

export default combineReducers({
    jogadorReducer,
    salaReducer
});
