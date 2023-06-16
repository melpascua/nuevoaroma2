import './NavBar.css';
import Logo from '../CartWidget/images/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to={'/'}>
                    <img className='logo' src={Logo} alt="" />
                </Link>
                <div>
                    <li><NavLink to={'/categoria/cafeteras'}>Cafeteras</NavLink></li>
                    <li><NavLink to={'/categoria/tipoDeCafe'}>Tipos De Café</NavLink></li>
                    <li><NavLink to={'/categoria/extra'}>Extra</NavLink></li>
                </div>
                <CartWidget><NavLink to={'/carrito'}></NavLink></CartWidget>
            </ul>
        </nav>
    );
};

export default NavBar;