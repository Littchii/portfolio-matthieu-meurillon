import { Dispatch } from 'redux';

export const SWITCH_THEME: string = "SWITCH_THEME";

export const switchTheme = (theme: string) => {

    return (dispatch: Dispatch) => {
        
        dispatch({ type: SWITCH_THEME, theme: theme })
        localStorage.setItem('theme', theme);

    }

}