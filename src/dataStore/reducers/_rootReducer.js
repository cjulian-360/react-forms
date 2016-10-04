import { combineReducers } from 'redux';
import counter from './counter';
import colors from './colors';

const rootReducer = combineReducers({
    counter,
    colors
});

export default rootReducer;