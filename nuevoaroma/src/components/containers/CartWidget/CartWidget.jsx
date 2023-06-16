import { useContext } from 'react';
import Cart from '../CartWidget/images/carrito-de-compras.png';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { cantidad } = useContext(CartContext)

    return (
        <Link to='/carrito'>
            <div>
                <a href=""><img src={Cart} alt="compras" /></a>
                <p>{cantidad}</p>
            </div>
        </Link>
    );
};

export default CartWidget;