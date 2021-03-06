import {SWITCH_THEME} from './themeActions';

const initialState = {
    theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}

const themeReducer = (state = initialState, action: {type: string, theme: string}) => {
    switch (action.type) {
        case SWITCH_THEME:
            return {
                ...state,
                theme: action.theme
            }
            default:
                return state
    }
}

export default themeReducer;