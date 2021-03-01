import {LOGIN, ERROR} from './userActions';

const initialState = {
    user: null,
    token: null,
    message: null
}

const userReducer = (state = initialState, action: {type: string, user: Object, token: string, message: string}) => {
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