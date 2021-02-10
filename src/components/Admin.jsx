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
        </div>
    )

}

export default Admin;