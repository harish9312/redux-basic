export function rootReducer(state = { value: 0 }, action) {
    console.log('>> state', state);
    console.log('>> action', action);
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DEC':
            return { value: state.value - 1 };
        default:
            return state;
    }
}