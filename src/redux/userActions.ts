import { Dispatch } from 'redux';

export const LOGIN: string = "LOGIN";
export const ERROR: string = "ERROR";

interface res {
    user: Object,
    token: string,
    error: string
}

export const userLogin = (email: string, password: string, history: any) => {

    return async (dispatch: Dispatch) => {
        
        fetch('/api/users/login', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then((res) => res.json())
        .then(({user, token, error}: res) => {
            if(! error) {
                localStorage.setItem('auth', token);
                dispatch({ type: LOGIN, user: user, token: token });
                history.push('/admin');
            } else {
                dispatch({ type: ERROR, message: error });
            }
        })
        .catch((e) => console.log(e))

    }

}