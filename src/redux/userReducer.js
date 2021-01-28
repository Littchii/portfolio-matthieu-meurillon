import {LOGIN, ERROR} from './userActions';

const initialState = {
    user: null,
    token: null,
    message: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user,
                token: action.token,
                message: null
            }
        case ERROR:
            return {
                ...state,
                message: action.message
            }
            default:
                return state
    }
}

export default userReducer;