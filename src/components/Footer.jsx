import '../styles/Footer.css';
import GitHub from '../icons/GitHub';
import Linkedin from '../icons/Linkedin';

const Footer = () => {

    return (
        <footer className="footer">
            <p className="texteFooter">&copy; 2021 - Matthieu MEURILLON. Tous droits réservés.</p>
            <a href="https://github.com/Littchii" title="mon github" className="icons" target="_blank" rel="noreferrer">
                <GitHub height={23} width={28} />
            </a>
            <a href="https://www.linkedin.com/in/matthieu-meurillon-468b0218b/" title="mon linkedin" className="icons" target="_blank" rel="noreferrer">
                <Linkedin height={23} width={28} />
            </a>
        </footer>
    )

}

export default Footer;