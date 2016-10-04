import { combineReducers } from 'redux';
import counterReducer from './counter';
import fundsReducer from './funds';

const rootReducer = combineReducers({
    counterReducer,
    fundsReducer
});

export default rootReducer;