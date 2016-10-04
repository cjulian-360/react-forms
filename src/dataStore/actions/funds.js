const actionTypes = {
    FUNDS_FETCH: 'FUNDS_FETCH'
};

const fundsFetch = () => {
    return {
        type: actionTypes.FUNDS_FETCH
    };
};

export {
    actionTypes,
    fundsFetch
};