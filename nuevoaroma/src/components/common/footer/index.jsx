import Twitter from './images/twitter.png';
import Facebook from './images/facebook.png';
import Instagram from './images/instagram.png';
import './footer.css';

const Footer = () => {
    return (
        <footer className='hola'>
            <section className="redes">
            <div>
                <a href=""><img src={Twitter} alt="twitter" /></a>
                <a href=""><img src={Facebook} alt="facebook" /></a>
                <a href=""><img src={Instagram} alt="instagram" /></a>
            </div>
        </section>
        <section className="derechos">
            <div>
                <h4>Nuevo Aroma © todos los derechos reservados 2022</h4>
            </div>
        </section>
        </footer>
    );
};

export default Footer;