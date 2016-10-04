import  { actionTypes } from '../actions/colors';

let initialState = {
    colors: ['red', 'green', 'blue']
};

function colorReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD:
            return Object.assign({}, {
                colors: state.colors.slice(0).push(action.color)
            });
        default:
            return state;
    }
}

export default colorReducer;