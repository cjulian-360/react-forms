import { combineReducers } from 'redux';
import counterReducer from './counter';
import colorsReducer from './colors';
import fundsReducer from './funds';

const rootReducer = combineReducers({
    funds: fundsReducer,
    counter: counterReducer,
    colors: colorsReducer
});

export default rootReducer;