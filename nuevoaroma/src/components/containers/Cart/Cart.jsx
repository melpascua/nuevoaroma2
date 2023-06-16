import './Cart.css';
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import Footer from '../../common/footer';

const Cart = () => {
    const { carrito, limpiar, obtenerTotal} = useContext(CartContext);

    {obtenerTotal()}

    if (obtenerTotal() === 0) {
        return (
            <div>
                <h1>¡Ups! ¡No hay nada que ver aquí!</h1>
                <Link to="/">Página principal</Link>
            </div>
        );
    }

    return (
        <>
            <div className='carrito-productos'>
                {carrito.map((prod) => (
                    <CartItem key={prod.id} {...prod} />
                ))}
                <h1>Total: ${obtenerTotal()}</h1>
                <Button onClick={limpiar}>Limpiar carrito</Button>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Cart;