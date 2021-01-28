import '../styles/ConnexionModal.css';
import { userLogin } from '../redux/userActions';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ConnexionModal = ({ showModal, hideModal }) => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const message = useSelector(state => state.userReducer.message);
    const dispatch = useDispatch();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userLogin(email, password, history));
    }

    return (
        showModal && ( 
        <div className="modalBg">
            <div className="modalContainer">
                <div className="modalHeader">
                    <h1 className="modalTitle">Connexion</h1>
                </div>
                <div className="modalBody">
                    {message ? <p className="errorMsg">{message}</p> : null}
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="email" className="info">Email</label>
                            <input className="field" name="email" id="email" type="email" value={email} onChange={handleChangeEmail} autoFocus required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password" className="info">Mot de passe</label>
                            <input className="field" name="password" id="password" type="password" value={password} onChange={handleChangePassword} required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="connexion" className="submitButton">Se connecter</label>
                            <input className="field submit" id="connexion" name="submit" type="submit" />
                        </div>
                    </form>
                    <p className="msgInfo">Ce formulaire est réservé uniquement aux admins. Si vous n'êtes pas admin, vous pouvez fermer cet onglet.</p>
                </div>
                <div className="close">
                    <button onClick={() => hideModal()} className="closeButton">Fermer</button>
                </div>
            </div>
        </div>
        )
    )

}

export default ConnexionModal;