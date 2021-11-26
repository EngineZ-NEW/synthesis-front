const ThemeReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_MODE':
            return {
                ...state,
                mode: action.payload
            }
        default:
            return state
    }
}

export default ThemeReducer