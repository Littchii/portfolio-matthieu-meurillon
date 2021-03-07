import '../styles/CV.css';

const CV = () => {

    return (
        <div className="block cv fade">
            <h2 className="head">Mon CV</h2>
            <a href="/CV.png" target="_blank">
                <img src={process.env.PUBLIC_URL + 'CV.png'} className="imageCV" alt="mon cv" />
            </a>
            <a href={process.env.PUBLIC_URL + 'CV.png'} className="download" download>
                Télécharger (PNG)
            </a>
        </div>
    )

}

export default CV;