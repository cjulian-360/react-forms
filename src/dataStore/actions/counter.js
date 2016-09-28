const actionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
};

const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export {
    actionTypes,
    increment,
    decrement
};