const generateId = () => Math.floor(Math.random() * 95) + 1;

const initialState = {
    comments: [
        {
            id: generateId(),
            body: 'Gayet güzel bir film.'
        },
        {
            id: generateId(),
            body: 'Beğenmedim.'
        },
        {
            id: generateId(),
            body: 'Oyuncular çok başarılıydı.'
        }
    ]
};


export const commentsReducer = (state = initialState, action) => {
    if (action.type === 'ADD_COMMENT') return { ...state, comments: [action.payload, ...state.comments] };
    else return state;
};