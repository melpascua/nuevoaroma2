import './CartItem.css';

const CartItem = ({ nombre, imagen, cantidad, precio }) => {

    return (
        <>
            <div className='carrito-producto'>
                <img src={imagen} alt={nombre} />
                <div>
                    <h3>Nombre</h3>
                    <h4>{nombre}</h4>
                </div>
                <div>
                    <h3>Cantidad</h3>
                    <p>{cantidad}</p>
                </div>
                <div>
                    <h3>Precio</h3>
                    <p>{precio}</p>
                </div>
                <div>
                    <h3>Subtotal</h3>
                    <p>{precio * cantidad}</p>
                </div>
            </div>
        </>
    )
};

export default CartItem;