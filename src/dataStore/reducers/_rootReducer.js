import { combineReducers } from 'redux';
import counter from './counter';
import colors from './colors';
import fundsReducer from './funds';

const rootReducer = combineReducers({
    counterReducer,
    fundsReducer
    counter,
    colors
});

export default rootReducer;