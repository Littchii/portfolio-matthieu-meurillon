import '../styles/Header.css';
import { switchTheme } from '../redux/themeActions';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Header = ({ showModal }) => {

    const theme = useSelector(state => state.themeReducer.theme);
    const dispatch = useDispatch();
    const history = useHistory();
    const authToken = localStorage.getItem('auth');

    return (
        <header className="header">
            <h1 className="title">Matthieu Meurillon</h1>
            <a href="https://github.com/Littchii" title="mon github" className="link gh" target="_blank" rel="noreferrer">-Mon GitHub-</a>
            {authToken ? 
                <button className="button" onClick={() => history.push('/admin')}>Admin</button> 
            : 
                <button className="button" onClick={() => showModal()}>Connexion</button>
            }
            <input className="switcher" type="checkbox" id="switcher" checked={theme === 'light' ? true : false} 
            onChange={
                () => {
                if(theme === 'light') {
                    dispatch(switchTheme('dark'))
                } else {
                    dispatch(switchTheme('light'))
                }
            }} />
            <label htmlFor="switcher" className="toggle"></label>
        </header>
    )

}

export default Header;