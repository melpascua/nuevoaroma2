import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ prod }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0)

    const {agregarProducto} = useContext(CartContext)

    const contador = (cantidad) => {
        setCantidadAgregada(cantidad)

        agregarProducto (prod, cantidad)
    };



    return (
        <div>
            <h2>Producto seleccionado</h2>
            <img src={prod.imagen} alt={prod.nombre} />
            <h3>{prod.nombre} {prod.precio}$</h3>
            <h3>{prod.stock}</h3>
            <div>
                {
                    cantidadAgregada > 0 ? (
                        <Link to='/carrito'>Ir al carrito</Link>
                    ) 
                    : 
                    (<ItemCount inicial={1} stock={prod.stock} onAdd={contador}></ItemCount>)
                }
                
            </div>
        </div>
    );
};

export default ItemDetail;