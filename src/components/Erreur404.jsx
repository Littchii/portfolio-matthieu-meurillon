import '../styles/Erreur404.css';
import ErrorIcon from '../icons/ErrorIcon';

const Erreur404 = () => {

    return (
        <div className="erreurPage">
            <div className="block404">
                <ErrorIcon width={170} height={170} />
                <h1 className="title404">
                    Page introuvable
                </h1>
                <p className="text404">La page que vous demandez n'existe pas ou n'existe plus.</p>
            </div>
        </div>
    )

}

export default Erreur404;