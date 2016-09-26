import { combineReducers } from 'redux';
import { counterReducer } from './counter';

const reducer = combineReducers({
    counterReducer
})

export default reducer;