const initialState = {
    value: 0,
    x: 'x'
};

export const IncDec = (state = initialState, action) => {
    if (action.type === 'INCREMENT') return { ...state, value: state.value + 1 };
    if (action.type === 'DECREASE') return { ...state, value: state.value - 1 };

    return state;
}
