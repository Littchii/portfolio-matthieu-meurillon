import '../styles/CV.css';

const CV = () => {

    return (
        <div className="block cv">
            <h2 className="head">Mon CV</h2>
            <img src={process.env.PUBLIC_URL + 'CV.png'} className="imageCV" />
            <a href={process.env.PUBLIC_URL + 'CV.png'} className="download" download>
                Télécharger (PNG)
            </a>
        </div>
    )

}

export default CV;