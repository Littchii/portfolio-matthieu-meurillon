import '../styles/Footer.css';
import GitHub from '../icons/GitHub';

const Footer = () => {

    return (
        <footer className="footer">
            <p className="texteFooter">&copy; 2021 - Matthieu MEURILLON. Tous droits réservés.</p>
            <a href="https://github.com/Littchii" title="mon github" className="icons" target="_blank" rel="noreferrer">
                <GitHub height={25} width={30} />
            </a>
        </footer>
    )

}

export default Footer;