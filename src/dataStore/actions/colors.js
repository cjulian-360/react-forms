const actionTypes = {
    ADD: 'ADD'
};

const add = (color) => {
    return {
        type: actionTypes.ADD,
        color
    };
};

export {
    actionTypes,
    add
};