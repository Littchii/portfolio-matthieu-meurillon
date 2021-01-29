export const LOGIN = "LOGIN";
export const ERROR = "ERROR";

export const userLogin = (email, password) => {

    return async dispatch => {
        
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
        .then((res) => {
            if(! res.error) {
                localStorage.setItem('auth', res.token);
                dispatch({ type: LOGIN, user: res.user, token: res.token });
                // history.push('/admin');
            } else {
                dispatch({ type: ERROR, message: res.error });
            }
        })
        .catch((e) => console.log(e))

    }

}