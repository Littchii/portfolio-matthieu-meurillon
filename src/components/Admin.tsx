import { useEffect } from 'react';
import '../styles/Admin.css';
import { useHistory } from 'react-router-dom';

const Admin = () => {

    const history = useHistory();

    useEffect(() => {
        if(! localStorage.getItem('auth')) {
            history.push('/');
        }
    });
    
    return (
        <div className="adminContainer">
            <h1 className="titleAdmin">
                Administration
            </h1>
            <h4 className="underTitle">
                Modifier les textes
            </h4>
        </div>
    )

}

export default Admin;