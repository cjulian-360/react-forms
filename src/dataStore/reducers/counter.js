import  { actionTypes } from '../actions/counter';

let initialState = {
    count: 0
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return Object.assign({}, {
                count: state.count + 1
            });
        case actionTypes.DECREMENT:
            return Object.assign({}, {
                count: state.count - 1
            });
        default:
            return state;
    }
}

export default counterReducer;