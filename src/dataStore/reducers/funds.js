import  { actionTypes } from '../actions/funds';
import funds from "../../stub";

let initialState = {
    funds: funds
}

function fundsReducer(state = funds, action) {
    switch (action.type) {
        case actionTypes.FUNDS_FETCH:
            return Array.prototype.concat([], state);
        default:
            return state;
    }
}

export default fundsReducer;