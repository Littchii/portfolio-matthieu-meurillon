import { Dispatch } from 'redux';

export const LOGIN: string = "LOGIN";
export const ERROR: string = "ERROR";

type res = {
    user: JSON,
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
        .then((res: res) => {
            if(! res.error) {
                localStorage.setItem('auth', res.token);
                dispatch({ type: LOGIN, user: res.user, token: res.token });
                history.push('/admin');
            } else {
                dispatch({ type: ERROR, message: res.error });
            }
        })
        .catch((e) => console.log(e))

    }

}